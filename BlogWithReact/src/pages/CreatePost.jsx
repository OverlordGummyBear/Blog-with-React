import React, { useState, Fragment } from "react";
import Header from "../components/Header";
import { useNavigate, useParams } from "react-router-dom";

function CreatePost(props){
    const { id } = useParams(); //get id from the parameter
    const [post, setPost] = useState({
            title: id !== undefined ? props.posts[id].title : "", 
            description: id !== undefined ? props.posts[id].description : ""
        });
    const navigate = useNavigate();

    function handleChange(event){
        const {name, value} = event.target;

        setPost((prevPost) => {
            return { //making it so that no matter which input is being changed, the other value is not being deleted
                ...prevPost,
                [name]: value
            }
        });
    }

    function handleSubmit(event){
        event.preventDefault();
        
        props.onSave(post);
        setPost({ //reset note
            title: "",
            description: ""
        });

        navigate("/blog");
    }

    return <Fragment>
        <Header content="Create Blog Post"/> 
        <div className="center-container">
            <div className="post-creation-container">
                <div>
                    <form className="form-create-container">
                        <input  className="save-input blog-title" 
                                type="text" name="title" 
                                placeholder="Blog title" 
                                onChange={handleChange} 
                                value={post.title}/>

                        <textarea   className="save-input blog-description" 
                                    name="description" placeholder="What is on your mind?" 
                                    onChange={handleChange} 
                                    value={post.description} />
                        <br/>
                        <input  className="submit-button name-btn" 
                                type="submit" value="Save" 
                                onClick={handleSubmit}/>
                    </form>
                </div>
            </div>
        </div>
    </Fragment>
}

export default CreatePost;