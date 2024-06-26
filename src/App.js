
import './App.css';
import React from 'react'; 
import Login from './Pages/Login';
import Registration from './Pages/Registration'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Explore from './Pages/Explore';
import Notification from './Pages/Notification';
import Messages from './Pages/Messages';
import Profile from './Pages/Profile';
import More from './Pages/More';
// import Sidebar from './Components/Sidebar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/Explore" element={<Explore/>}/>
        <Route path="/Notification" element={<Notification/>}/>
        <Route path="/Messages" element={<Messages/>}/>
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="/More" element={<More/>}/>
        <Route path="/Registration" element={<Registration/>}/>
      </Routes>
    </BrowserRouter>
    // <Sidebar/>

  );

}

export default App;
