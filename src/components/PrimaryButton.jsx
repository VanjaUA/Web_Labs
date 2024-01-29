import React from "react";
import './PrimaryButton.css'

const PrimaryButton = ({text, onClick}) =>{
    return(
        <button onClick={onClick} className="button">{text}</button>
    )
}

export default PrimaryButton;