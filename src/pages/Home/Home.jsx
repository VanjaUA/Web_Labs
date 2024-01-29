import React from "react";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Helicopters from "./components/Helicopter/Helicopters";
import Footer from "./components/Footer/Footer";

const Home = () =>{
    return(
        <div style={{display:"flex", flexDirection:"column", gap:"160px"}}>
            <Header/>
            <Banner/>
            <Helicopters/>
            <Footer/>
        </div>
    )
}

export default Home;