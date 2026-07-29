import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

function EnterName(props){
    const navigate = useNavigate();
    const [userName, setUsername] = useState("");
    
    function handleSubmit(event){
        event.preventDefault(); //preventDefault behavior namely reloading
        
        props.onEnter(userName);
        console.log(userName)
        
        navigate("/blog");   
    }

    function handleChange(event){ //called when changes is registered when the text is changed in the text field
        const {name, value} = event.target;

        setUsername(value);
    }

    return <div className="welcome-container">
        <h1 className="suse-mono name-title"> What is your name? </h1>
        <form className="form-container">
            <input className="name-field" onChange={handleChange} type="text" name="fName" placeholder="Name" value={userName}/> {/* value is used to control the text field */}
            <input className="name-btn jockey-one-regular" onClick={handleSubmit} type="submit" value="Enter"/>
        </form>
    </div>
}

export default EnterName;