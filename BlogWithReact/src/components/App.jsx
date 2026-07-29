import { useState } from 'react';
import '../App.css';
import Footer from './Footer';

import {BrowserRouter as Router, Routes, Route, useNavigate} from "react-router-dom";
import Blog from '../pages/Blog';
import CreatePosts from "../pages/CreatePost";
import EnterName from "../pages/EnterName";

function App() {
  const [userName, setUsername] = useState(null); 
  const [posts, setPosts] = useState([]);

  const navigate = useNavigate(); //used to navigate to other pages


  function onEnterUsername(name){
    setUsername(name);
  }

  function HandleCreateClick(){
    navigate("/blog");
  }

  return <div>
    <Routes>
      <Route path="/" element={userName === null ? <EnterName onEnter={onEnterUsername} /> : <Blog name={userName} />} />
      <Route path="/blog" element={<Blog name={userName} />} />
      <Route path="/create" element={<CreatePosts />} />
    </Routes>
  </div>;
}

export default App
