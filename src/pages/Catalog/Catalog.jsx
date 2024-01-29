import React from "react";
import Header from "../Home/components/Header/Header";
import Footer from "../Home/components/Footer/Footer";
import FilterSection from "./components/FilterSection/FilterSection";
import Goods from "./components/Goods/Goods";
import { useState } from "react";

const Catalog = () => {
    const [selectedValue1, setSelectedValue1] = useState("");
    const [selectedValue2, setSelectedValue2] = useState("");
    const [value, setValue] = useState("");

    return(
        <div style={{display:"flex", flexDirection:"column", gap:"10px"}}>
            <Header/>;
            <FilterSection setSelectedValue1={setSelectedValue1} setSelectedValue2={setSelectedValue2} value={value} setValue={setValue}/>;
            <Goods selectedValue1={selectedValue1} selectedValue2={selectedValue2} value={value}/>
            <Footer/>;
        </div>
    );
}

export default Catalog;
