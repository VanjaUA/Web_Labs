import React from "react";
import './Good.css';
import { Link } from 'react-router-dom';

const Good = ({ id, name, passengersCount, maxSpeed }) => {
    return (
        <div className="wrapper">
            <h3 className="good__title">{name}</h3>
            <p className="good__text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet labore, optio
                laboriosam aspernatur quae consequatur!
            </p>
            <div className="price__section">
                <div className="inner">
                    <h4 className="price__section-title">Passengers Count:</h4>
                    <var className="price__section-price">{passengersCount}</var>
                </div>
                <div className="inner" style={{margin: "30px"}}>
                    <h4 className="price__section-title">Max Speed:</h4>
                    <var className="price__section-price">{maxSpeed}</var>
                </div>
            </div>
            <Link to={`/catalog/${id}`} className="button">View more</Link>
        </div>
    )
}


export default Good;