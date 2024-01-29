import React, { useState } from "react";
import Helicopter from "./Helicopter";
import helicopterImage1 from '../../../../img/heli1.jpg'
import helicopterImage2 from '../../../../img/heli2.jpg'
import helicopterImage3 from '../../../../img/heli3.jpg'
import helicopterImage4 from '../../../../img/heli4.jpg'
import PrimaryButton from "../../../../components/PrimaryButton"

const Helicopters = () => {
    const [showMore, setShowMore] = useState(false);

    const clickHandler = () => {
        setShowMore(!showMore);
    };

    return(
        <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"100px"}}>
            <div style={{display: "flex", gap:"200px"}}>
                <Helicopter image={helicopterImage1} name="World first helicopter" speed={90} passengersCount={1}/>
                <Helicopter image={helicopterImage2} name="Boeing AH-64 Apache" speed={300} passengersCount={4}/>
            </div>
            {showMore && 
                <div style={{display: "flex", gap:"200px"}}>
                    <Helicopter image={helicopterImage3} name="Sikorsky UH-60 Black Hawk" speed={250} passengersCount={8}/>
                    <Helicopter image={helicopterImage4} name="Bell AH-1 Cobra" speed={230} passengersCount={20}/>
                </div>
            }
            <PrimaryButton text={showMore ? "View less" : "View more"} onClick={clickHandler}/>
        </div>
    )
}

export default Helicopters;
