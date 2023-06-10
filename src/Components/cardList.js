import React from "react";
import Card from "./Card";

const Cardlist = ({ friends }) => {
    return(
        friends.map((user ,i) =>{
            return <Card key={friends[i].id} name={friends[i].name} email={friends[i].email} />
        })
    );
}

export default Cardlist