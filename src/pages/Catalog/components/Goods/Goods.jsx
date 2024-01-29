import React from "react";
import Good from "./Good";
import Spinner from "../../../../components/Loader";
import axios from 'axios';
import { useEffect, useState } from 'react';

const Goods = ({ selectedValue1, selectedValue2, value, id }) => {
    const [helicopterData, setGoodsData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        let timer = null;

        const fetchGoods = async () => {
            setIsLoading(true);
            timer = setTimeout(() => setIsLoading(false), 1500);
            
            const response = await axios.get('http://localhost:5074/api/helicopters');
            setGoodsData(response.data);
        };

        fetchGoods();
        return () => clearTimeout(timer);

    }, [id]);

    return isLoading ? <Spinner /> :(
        <div style={{ display: "flex", justifyContent: "space-around", margin: "0 0 300px 0"}}>
            {helicopterData
             .filter((good) => 
             (selectedValue1 === "" || (selectedValue1 === "option1" && good.maxSpeed > 400) || (selectedValue1 === "option2" && good.maxSpeed < 400)) &&
             (selectedValue2 === "" || (selectedValue2 === "option1" && good.passengersCount > 20) || (selectedValue2 === "option2" && good.passengersCount < 20)) &&
             (good.name.toLowerCase().includes(value.toLowerCase()))
                 )
                .map((good, index) => (
                    <Good key={index} id={good.id} name={good.name} passengersCount={good.passengersCount} maxSpeed={good.maxSpeed}/>
                ))}
        </div>
    );
}

export default Goods;
