import React, { useState } from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Message from "./Message";
import Logic from "../components/ThalaLogic";
import ReactPlayer from 'react-player/youtube';
import Image from '../utils/pic.png';

import countapi from 'countapi-js';

import {FacebookShareButton, TwitterShareButton, WhatsappShareButton} from "react-share";
import {FacebookIcon, TwitterIcon, WhatsappIcon} from "react-share";


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

    {/*LIGHT-DARK Theme BUTTON*/ }
    
    const [myBtn, setmyBtn] = useState("Enable Dark Mode");
    // const [mystyle, setmyStyle] = useState({ backgroundColor: 'black' });
    
    const ButtonClick = () => {
    const bodyBackgroundColor = window.getComputedStyle(document.body).backgroundColor;

    if (bodyBackgroundColor === 'rgb(244, 244, 244)' || bodyBackgroundColor === '#f4f4f4') {
        setmyBtn("Enable Light Mode");
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
    } 
    else
    {
        setmyBtn("Enable Dark Mode");
        // setmyStyle({ backgroundColor: '#f4f4f4' });
        document.body.style.backgroundColor = '#f4f4f4'; //white
        document.body.style.color = 'black';
    }
  }

    
    const currentPageUrl = window.location.href;

    return (
        <div className="container">
            <div className="thala-search">
                <input type="text" id="inputBox" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <button id="submitButton" onClick={handleButtonClick}>Submit</button>
                <button id="Button" onClick={ButtonClick}>{myBtn}</button>
            </div>
            <div className="thala-message">
                {message}
            </div>
            <div className="thala-img">
                {myImage}
            </div>

            {/* Social Share Components */}
            <div className="share-component">
                <FacebookShareButton url={currentPageUrl}><FacebookIcon /></FacebookShareButton>
                <TwitterShareButton title="Behind everything, there is Reason !" url={currentPageUrl}><TwitterIcon /></TwitterShareButton>
                <WhatsappShareButton title="Behind everything, there is Reason !" url={currentPageUrl}><WhatsappIcon/></WhatsappShareButton>
            </div>

             {/* <!-- hitwebcounter Code START --> */}
            <div className="counter">  
                <h4>PAGE VISITS</h4>    
                <a href="https://www.hitwebcounter.com" target="_blank">
                <img src="https://hitwebcounter.com/counter/counter.php?page=10681799&style=0006&nbdigits=5&type=page&initCount=0" title="Counter Widget" Alt="Visit counter For Websites"   border="0" /></a>                                               
            </div>
        </div>
    );
};

export default Body;
