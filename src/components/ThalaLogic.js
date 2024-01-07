import React,{Component} from "react";
import ReactDOM from "react-dom/client";
import Message from "./Message";

import React from 'react';
import ReactDOM from 'react-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


// const PlayVideo = () => {
//   return (
//     <div>
//       <video width="320" height="240" controls>
//         <source src="/video.mp4"></source>
//       </video>
//     </div>
//   );
// };


const SumOfDig = ({ input }) => {
  // Convert the input to a string to iterate through each digit
  const inputStr = String(input);

  // Iterate through each character and perform the numerical operations
  let result = 0;
  for (let i = 0; i < inputStr.length; i++) {
    const digit = parseInt(inputStr[i]);
       // Perform any numerical operation you want, here we use addition
      result += digit;
  }

  // Check if the result is 7
  return result === 7;
}

const ThalaLogic = ({inputValue}) =>
{
    const check = SumOfDig({ input: inputValue });

    if (inputValue.length === 7)
    {
      return true;
    }
    else if (inputValue == 7)
    {
      return true;
    }
    else if ( check === true)
    {
      return true;
    }
};

export default ThalaLogic;