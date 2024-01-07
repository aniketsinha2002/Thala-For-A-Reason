import React, { useState } from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Message from "./Message";
import Logic from "../components/ThalaLogic";
import ReactPlayer from 'react-player/youtube';
import Image from '../utils/pic.png';

const Body = () => {
    const [inputValue, setInputValue] = useState("");
    const [message, setMessage] = useState("");
    const [myImage, setmyImage] = useState("");

    const handleButtonClick = () => {
        // Check input conditions
        if (Logic({ inputValue }) === true)
        {
            setMessage("Thalaa for a Reason");
            setmyImage(<img class="thala-img" src={Image} alt="" />);
        }
        else
        {
            setmyImage();
            setMessage("No thalaa");
        }
    };

    return (
        <div className="container">
            <div className="thala-search">
                <input type="text" id="inputBox" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <button id="submitButton" onClick={handleButtonClick}>Submit</button>
            </div>
            <div className="thala-message">
                {message}
            </div>
            <div className="thala-img">
                {myImage}
            </div>
        </div>
    );
};

export default Body;
