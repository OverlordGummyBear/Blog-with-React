import { useState } from 'react';
import '../App.css';
import Footer from './Footer';

import {BrowserRouter as Router, Routes, Route, useNavigate} from "react-router-dom";
import Blog from '../pages/Blog';
import CreatePosts from "../pages/CreatePost";
import EnterName from "../pages/EnterName";

function App() {
  const [userName, setUsername] = useState(null); 
  const [posts, setPosts] = useState([{title: "This is the first title", description: "this is the first description"},
    {title: "This is the second title", description: "This is the second description"}
  ]);

  const navigate = useNavigate(); //used to navigate to other pages

  


  function onEnterUsername(name){
    setUsername(name);
  }

  return <div>
    <Routes>
      <Route path="/" element={userName === null ? <EnterName onEnter={onEnterUsername} /> : <Blog name={userName} postList={posts}/>} />
      <Route path="/blog" element={<Blog name={userName} postList={posts} />} />
      <Route path="/create" element={<CreatePosts />} />
    </Routes>
  </div>;
}

export default App
