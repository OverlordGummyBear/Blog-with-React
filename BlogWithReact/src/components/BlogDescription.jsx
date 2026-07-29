import React from "react";
import BlogIllustration from "../assets/blog-illustration.webp";
import { useNavigate } from "react-router-dom";

function BlogDescription(){
    const navigate = useNavigate();

    return <div className="blog-description-container">
        <img src={BlogIllustration} alt="blog illustration" />

        <h2 className="jockey-one-regular" >Welcome to your personal blog </h2>
        <p className="red-hat-display" style={{textAlign: "left"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vestibulum feugiat augue ut iaculis. Proin eu
            congue lacus, sed venenatis diam. Praesent purus ligula, tincidunt eget pharetra id, condimentum non felis. Sed a
            convallis libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec
            non posuere magna.
        </p>

        <form>
            <input className="name-btn" type="submit" value="Create Post" onClick={(event) => {
                navigate("/create");
            }}/>
        </form>
    </div>;
}

export default BlogDescription;
