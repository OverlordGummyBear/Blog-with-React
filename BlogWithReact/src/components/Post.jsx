import React from "react";
import { useNavigate } from "react-router-dom";

function Note(props){
    const navigate = useNavigate();

    return <div className="post-container">
        <h2 className="jockey-one-regular" style={{textAlign: "center"}}> {props.title} </h2>
        <p className="red-hat-display"> {props.description} </p>

        <div className="post-btn-container">
            <form>
                <input className="name-btn" type="submit" value="Edit" onClick={() => {
                    navigate("/create");
                }}/>
                <input className="name-btn" type="submit" value="Delete" />
            </form>
        </div>
    </div>
}

export default Note;