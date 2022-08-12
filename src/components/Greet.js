import React from "react";

const Greet = (props) => {
    return(
        <div>
            <h1>HEllo {props.name} {props.lname}</h1>
            {props.children}
        </div>
    )
}
export default Greet