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

  function addPost(newPost, _){ //do not care about the second parameter if we are adding a post
    setPosts(prevPosts => {
      return [...prevPosts, newPost]; //...prevPosts copies the existing array and then adds the new post to the array
    });
  }

  function updatePost(updatedPost, id){
    const newPosts = [...posts];
    newPosts[id] = updatedPost;
    setPosts(newPosts);
  }

  function deletePost(id){
    setPosts(prevPosts => {
      return prevPosts.filter((postItem, index) => {
        return index !== id;
      })
    })
  }

  function onEnterUsername(name){
    setUsername(name);
  }

  return <div>
    <Routes>
      <Route path="/" element={userName === null ? 
                              <EnterName onEnter={onEnterUsername} /> : 
                              <Blog 
                                name={userName} 
                                postList={posts} 
                                onDelete={deletePost}
                              />} />
      <Route path="/blog" element={<Blog 
                                name={userName} 
                                postList={posts} 
                                onDelete={deletePost}
                                  />} />
      <Route path="/create" element={<CreatePosts onSave={addPost} />} />
      <Route path="/edit/:id" element={<CreatePosts onSave={updatePost} posts={posts} /> } />
    </Routes>
  </div>;
}

export default App
