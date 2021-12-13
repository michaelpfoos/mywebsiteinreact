import './App.css';
import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import HomeView from './views/HomeView';
import AboutMeView from './views/AboutMeView';
import BlogView from './views/BlogView';
import Auth from './views/Auth';
import PostBlogView from './views/PostBlogView';
import Register from './views/Register';
import EditBlogView from './views/EditBlogView';


function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeView page= { "home" } loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />     
        <Route path="/aboutme/" element={<AboutMeView page={ "aboutMe" } loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />   
        <Route path ="/blog/" element={<BlogView page={ "blog" } loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
        <Route path ="/blog/:category/:title/" element={<BlogView page={ "blog" } loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
        <Route path="/admin/" element={<Auth loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
        <Route path="/register/" element={<Register />} />
        <Route path="/post/" element={<PostBlogView loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
        <Route path="/post/:blogId" element={<EditBlogView loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
      </Routes>
    </div>
  );
}

export default App;
