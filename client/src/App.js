import './App.css';
import { Routes, Route } from "react-router-dom";
import HomeView from './views/HomeView';
import AboutMeView from './views/AboutMeView';
import BlogView from './views/BlogView';
import Auth from './views/Auth';
import PostBlogView from './views/PostBlogView';
import Register from './views/Register';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeView page= { "home" } />} />     
        <Route path="/aboutme/" element={<AboutMeView page={ "aboutMe" } />} />   
        <Route path ="/blog/" element={<BlogView page={ "blog" } />} />
        <Route path ="/blog/:category/:title/" element={<BlogView page={ "blog" } />} />
        <Route path="/admin/" element={<Auth />} />
        <Route path="/register/" element={<Register />} />
        <Route path="/post/" element={<PostBlogView />} />
      </Routes>
    </div>
  );
}

export default App;
