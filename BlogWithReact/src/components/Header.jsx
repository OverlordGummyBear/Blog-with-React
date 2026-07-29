import React from "react"

function Header(props){
    return <header>
        <h1 className="suse-mono name-title"> Hi {props.name} </h1>
    </header>
}

export default Header;