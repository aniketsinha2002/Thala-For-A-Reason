import React, { useState } from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Message from "./Message";
import Logic from "../components/ThalaLogic"; //LOGIC
import ReactPlayer from 'react-player/lazy';
import Image from '../utils/pic.png';
import ReactAudioPlayer from "react-audio-player";
import ConfettiGenerator from "confetti-js";
import JSConfetti from 'js-confetti';
import countapi from 'countapi-js';

import {FacebookShareButton, TwitterShareButton, WhatsappShareButton} from "react-share";
import {FacebookIcon, TwitterIcon, WhatsappIcon} from "react-share";


const Body = () => {
    const [inputValue, setInputValue] = useState("");
    const [message, setMessage] = useState("");
    const [myImage, setmyImage] = useState("");
    const jsConfetti = new JSConfetti();
     const [Timeouts, setTimeouts] = useState(null);
    
    
    const handleButtonClick = () => {

        //If USER hits submit blank
        if (inputValue.trim() === '')
        {
            setMessage("Write any snippet to Check Thalavity !!");
        }
        // Check input conditions
        else if (Logic({ inputValue }) === true) 
        {
            setMessage("Its Thala for a reason 👑7️⃣");
            // setmyImage(<img class="thala-img" src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXMzdTBrd3M5aHUyZDgzZ2ZhNnRvMWdleXV0OTBia21oMzdhY3I1ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/oBNjvfXenfcuFuyaol/giphy-downsized-large.gif" alt="" />);

            setmyImage(<ReactPlayer class="thala-video" url="https://youtube.com/shorts/_C7pev8zr_k?feature=share" controls={false} width={'50%'} playing={true} loop={true} light={false} showinfo={0} frameborder={0} modestbranding={false} />);
            

            //-----CONFETTI------
            const popConfetti = async (count) => {
                if (count > 0) {
                    jsConfetti.addConfetti();
                    // Wait for 1 second before popping confetti again
                    setTimeout(() => {
                        popConfetti(count - 1);
                    }, 2000);
                }
            };

            // Trigger the first pop (Adjust the number to the desired number of pops)
            popConfetti(3);
        }
        else
        {
             // Clear ongoing timeouts when the else condition is triggered

            setmyImage();
            setMessage("No thalaa :(");
        }
    };

    {/*LIGHT-DARK Theme BUTTON*/ }
    
    const [myBtn, setmyBtn] = useState("Enable Dark Mode");
    // const [mystyle, setmyStyle] = useState({ backgroundColor: 'black' });
    
    const ButtonClick = () => {
    const bodyBackgroundColor = window.getComputedStyle(document.body).backgroundColor;

    if (bodyBackgroundColor === 'rgb(244, 244, 244)' || bodyBackgroundColor === '#f4f4f4') {
        setmyBtn("Enable Light Mode");
        document.body.style.backgroundColor = '#0F0F0F';
        document.body.style.color = 'white';
    } 
    else
    {
        setmyBtn("Enable Dark Mode");
        // setmyStyle({ backgroundColor: '#f4f4f4' });
        document.body.style.backgroundColor = '#f4f4f4'; //white
        document.body.style.color = '#0F0F0F'; //black
    }
  } 

    const currentPageUrl = window.location.href;

    return (
        <div className="container">
            <div className="thala-search">
                <input type="text" id="inputBox" placeholder="Enter your snippet" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <button id="submitButton" onClick={handleButtonClick}>Submit</button>
                <button id="styleButton" onClick={ButtonClick}>{myBtn}</button>
            </div>
            <div className="thala-message">
                {message}
            </div>
            <div className="thala-img">
                {myImage}
            </div>

            {/* Social Share Components */}
            <div className="share-component">
                <h4>Share Now !! (Just For Fun)</h4>
                <FacebookShareButton url={currentPageUrl}><FacebookIcon width={"30"} /></FacebookShareButton>
                <TwitterShareButton title="Behind everything, there is Reason !" url={currentPageUrl}><TwitterIcon width={"30"} /></TwitterShareButton>
                <WhatsappShareButton title="Behind everything, there is Reason !" url={currentPageUrl}><WhatsappIcon width={"30"}/></WhatsappShareButton>
            </div>

             {/* <!-- hitwebcounter Code START --> */}
            <div className="counter">  
                <h4>Page Visits:</h4>    
                 <a href="https://www.hitwebcounter.com" target="_blank">
                <img src="https://hitwebcounter.com/counter/counter.php?page=10687564&style=0006&nbdigits=5&type=page&initCount=0" title="Counter Widget" Alt="Visit counter For Websites"   border="0" /></a>                                                 
            </div>   
            
            <div>
                Made with 💖 by <a target="_blank" href="https://github.com/aniketsinha2002">Aniket Sinha</a>
            </div>

          

        </div>
    );
};

export default Body;
