import React from "react";

function Note(props){
    return <div className="post-container">
        <h2 className="jockey-one-regular" style={{textAlign: "center"}}> {props.title} </h2>
        <p className="red-hat-display"> {props.description} </p>

        <div className="post-btn-container">
            <form>
                <input className="name-btn" type="submit" value="Edit" />
                <input className="name-btn" type="submit" value="Delete" />
            </form>
        </div>
    </div>
}

export default Note;