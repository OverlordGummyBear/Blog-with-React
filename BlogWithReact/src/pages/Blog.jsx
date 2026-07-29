import React, {Fragment} from "react";
import Header from "../components/Header"
import Footer from "../components/Footer";
import BlogDescription from "../components/BlogDescription";
import Post from "../components/Post";
import PostList from "../components/PostList";

function Blog(props){
    return (
        <Fragment> {/* can also use div, but I do not think the container need any styling, but is just used to satisfy the one root rule */}
            <Header content={"Hi " + props.name}/>
            <div className="post-page-container">
                <BlogDescription/>
                <PostList posts={props.postList} onDelete={props.onDelete} />
            </div>
            <Footer/>
        </Fragment>
    );
}

export default Blog;