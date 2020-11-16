import React from "react"

function Pizza(props) {
    return (
        <div> 
            <h1>Type of Pizza: {props.type} </h1>
            <h2> Calories: {props.calories} </h2>
            <h3> Price: {props.price}</h3>
            <h4>Popularity: {props.popularity} </h4>
        </div>
    );

}



export default Pizza;