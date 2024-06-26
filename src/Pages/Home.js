import React, { useEffect, useRef,useState } from 'react'
import Sidebar from '../Components/Sidebar'
import {
  FaCalendar,
  FaMapMarker,
  FaPoll,
  FaRegImage,
  FaSmile,
} from "react-icons/fa";
import {getFirestore, doc, setDoc, collection, where, getDocs, query} from "firebase/firestore"
import {getAuth, onAuthStateChanged, } from "firebase/auth"
import {app} from "../Firebase"
import { useNavigate } from 'react-router';

function Home() {
  const Tweetref = useRef()
  const db = getFirestore(app)
  const auth = getAuth()
  const navigate = useNavigate()
  onAuthStateChanged(auth,(user)=>{
    if(!user){
      navigate("/")
    }
  })
  function sendtweet() {
    const Tweet = Tweetref.current.value
    onAuthStateChanged(auth, (user) => {
      if (user){
        const UserId = user.uid


        const newTweet = doc(collection(db, "Tweets"))
    
        setDoc(newTweet, {
          UserId: UserId,
          Tweet: Tweet,
          TweetId: newTweet.id,
          TweetUserId: UserId

        }).then(() => {
          window.location.reload()
        })
      
      }
    })
  }
 
  const [TweetList, setTweetList] = useState([]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const UserId = user.uid;

        const FetchData = async () => {
          const queryDocument = query(
            collection(db, "Tweets"),
            where("UserId", "==", UserId)
          );
          const querySnapShot = await getDocs(queryDocument);

          const TweetItem = [];
          querySnapShot.forEach((TweetDoc) => {
            TweetItem.push({ Id: TweetDoc.Id, ...TweetDoc.data() });
          });

          setTweetList(TweetItem);
        };

        FetchData();
      }
    });
  }, []);

  return (
    <div className="Home">
      <Sidebar />
      <div className="Home1">
        <h1>HOME</h1>
        <div className="Home2">
          <p>For you</p>
          <p>Following</p>
        </div>
        <div className="one">
          <h1 id="Name"></h1>
          <p id="email"></p>

          <textarea
            name=""
            id="tweets"
            cols="30"
            rows="10"
            ref={Tweetref}
            placeholder=" What is happening?!"
          ></textarea>
          <div className="holder">
            <div className="holder1">
              <FaRegImage />
              <FaPoll />
              <FaSmile />
              <FaCalendar />
              <FaMapMarker />
            </div>

            <button onClick={sendtweet} id="Twt">
              Tweet
            </button>
          </div>
          {TweetList.map((TweetItem) => (
            <div key={Math.random()} className="twit">
              <p>{TweetItem.Tweet}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="Search">
        <input type="text" placeholder="Search Twitter" />
      </div>
    </div>
  );
}

export default Home