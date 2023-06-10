import React from "react";

const Card = (props) =>{
    return(
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5" >
            <img alt={props.name} src={`https://robohash.org/${props.name}?100x100`} height={150} width={150} />
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    );
}

export default Card;