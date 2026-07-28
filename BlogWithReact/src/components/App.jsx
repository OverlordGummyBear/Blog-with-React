import { useState } from 'react';
import '../App.css';
import Footer from './Footer';

import {BrowserRouter as Router, Routes, Route, useNavigate} from "react-router-dom";
import Blog from '../pages/Blog';
import CreatePosts from "../pages/CreatePost";
import EnterName from "../pages/EnterName";

function App() {
  const [userName, setUsername] = useState(false); 
  const navigate = useNavigate(); //used to navigate to other pages

  function HandleCreateClick(){
    navigate("/blog");
  }

  return <div>
    <Routes>
      <Route path="/" element={userName ? <EnterName /> : <EnterName />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/create" element={<CreatePosts />} />
    </Routes>
  </div>;
}

export default App
