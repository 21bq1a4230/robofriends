import React from "react";

const Scroll = (props) =>{
    return(
        <div className="tc" style={{overflowY:"scroll" ,borderTop:"1px solid black" ,height:"80vh", marginTop:"10px"}}>
            {props.children}
        </div>
    );
}

export default Scroll