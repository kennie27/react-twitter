// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7qrn89Ek943-1wwg7dqHMNYdD05CweJw",
  authDomain: "trial-9ae13.firebaseapp.com",
  projectId: "trial-9ae13",
  storageBucket: "trial-9ae13.appspot.com",
  messagingSenderId: "212820170212",
  appId: "1:212820170212:web:a680df6c7afb1122c363f1",
  measurementId: "G-V0GR555J31",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app };
export { analytics };
