import React from "react";
import Post from "./Post";

function PostList(props){
    const posts = props.posts;
    
    return <div className="post-array-container">
        {posts.map((postItem, index) => {
            return (
                <Post key={index} id={index} title={postItem.title} description={postItem.description} />
            );
        })}
    </div>;
}

export default PostList;