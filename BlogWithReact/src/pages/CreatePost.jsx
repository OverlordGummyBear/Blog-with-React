import React, { useState, Fragment } from "react";
import Header from "../components/Header";

function CreatePost(props){
    const [note, setNote] = useState({title: "", description: ""});
    const [isEditing, setEdit] = useState(props.editing);

    return <Fragment>
        <Header content="Create Blog Post"/> 
        <div className="center-container">
            <div className="post-creation-container">
                <div>
                    <form className="form-create-container">
                        <input className="save-input blog-title" type="text" name="title" placeholder="Blog title" />

                        <textarea className="save-input blog-description" name="description" placeholder="What is on your mind?" />
                        <br/>
                        <input className="submit-button name-btn" type="submit" value="Save" />
                    </form>
                </div>
            </div>
        </div>
    </Fragment>
}

export default CreatePost;