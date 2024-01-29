import React from "react";
import './Helicopter.css'

const Helicopter = ({image, name, speed, passengersCount}) => {
    return(
        <div className="helicopter__container">
            <div className="envelopment">
                <img src={image} alt="heli_2" style={{width:"350px", height:"300px"}}/>
                <h3 className="helicopter__title">{name}</h3>
                <h3 className="helicopter__title">Speed: {speed}</h3>
                <h3 className="helicopter__title">Passengers count: {passengersCount}</h3>
                <p className="small__text">
                    Lorem ipsum, dolor sit 
                    amet consectetur adipisicing elit. Eveniet labore, optio 
                    laboriosam aspernatur quae consequatur!</p>
            </div>
        </div>
    )
}

export default Helicopter