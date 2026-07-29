import React, {Fragment} from "react";
import Header from "../components/Header"
import Footer from "../components/Footer";
import BlogDescription from "../components/BlogDescription";
import Post from "../components/Post";

function Blog(props){
    return (
        <Fragment> {/* can also use div, but I do not think the container need any styling, but is just used to satisfy the one root rule */}
            <Header name={props.name}/>
            <div className="post-page-container">
                <BlogDescription />
                <div className="post-array-container">
                    <Post title="This is the title" description="This is the description"/>
                </div>
            </div>
            <Footer/>
        </Fragment>
    );
}

export default Blog;