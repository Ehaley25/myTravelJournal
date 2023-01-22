import React from "react";
import ReactDOM from 'react-dom/client'
import data from "../data";



function Locations(props){
    return(
        <div className="trip">
            <div className="trip-image">
                <img src={props.imageUrl}/>
            </div>
            <div className="trip-info">
                <div className="trip--info--top">
                    <p>{props.location}</p>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <div>
                    <h1>{props.title}</h1>
                    <p>{props.startDate} - {props.endDate}</p>
                    <p className="description">{props.description}</p>
                </div>
            </div>
        </div>
    )
}


export default Locations


// title: "New York City",
// location: "New York",
// googleMapsUrl: "https://goo.gl/maps/BBUERMvyPL7BPEDh8",
// startDate: "22 Jan, 2022",
// endDate: "26 Jan, 2022",
// description: "New York City is home to the first pizzeria in America.",
// imageUrl: "https://source.unsplash.com/WLxQvbMyfas"