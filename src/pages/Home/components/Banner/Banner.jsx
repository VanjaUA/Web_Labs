import React from "react";
import './Banner.css';
import BannerArticle from "./BannerArticle";
import BannerImage from '../../../../img/heli1.jpg'

const Banner = () =>{
    return(
        <main className="main">
            <img src={BannerImage} alt="first__helicopter" style={{ maxWidth: "400px", maxHeight: "400px" }} />
            <BannerArticle/>
        </main>
    )
}

export default Banner;