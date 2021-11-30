import './App.css';
import HomeView from './views/HomeView';
import AboutMeView from './views/AboutMeView';
import BlogView from './views/BlogView';
import Auth from './views/Auth';
import PostBlogView from './views/PostBlogView';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeView page= { "home" } />} />     
        <Route path="/aboutme/" element={<AboutMeView page={ "aboutMe" } />} />   
        <Route path ="/blog/" element={<BlogView page={ "blog" } />} />
        <Route path ="/blog/:category/:title/" element={<BlogView page={ "blog" } />} />
        <Route path="/admin/" element={<Auth />} />
        <Route path="/post/" element={<PostBlogView />} />
      </Routes>
    </div>
  );
}

export default App;
