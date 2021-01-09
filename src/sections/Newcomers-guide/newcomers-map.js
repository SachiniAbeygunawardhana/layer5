import React from "react";
import styled from "styled-components";
import ReactTooltip from "react-tooltip";

const NewcomersMapWrapper = styled.div`

  .stroke1 {
    stroke : black; 
    stroke-width: 10; 
    stroke-linecap: round; 
    stroke-dasharray: 15 15;
  }
  
  .stroke2 {
    stroke : #F38D17; 
    stroke-width: 10; 
    stroke-linecap: round; 
    stroke-dasharray: 15 15;
  }
  
  .stroke3 {
    stroke : black; 
    stroke-width: 10; 
    stroke-linecap: round; 
  }
  
  .stroke4 {
    stroke : black; 
    stroke-width: 10; 
    stroke-linecap: round; 
  }
  
  .stroke5 {
    stroke : black; 
    stroke-width: 10; 
  }
  
  .stroke6 {
    stroke : black; 
    stroke-width: 10; 
  }

`;

const NewcomersMap = () => {
    return(
        <NewcomersMapWrapper>
            <svg width="425" height="360" viewBox="0 0 425 360" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40 154C49.0411 155.66 72.6466 165.553 94.7397 191.846C105.589 206.287 137.249 225.807 177.096 188.36C189.096 174.749 219.408 150.016 244.658 159.976C251.397 164.623 267.244 176.807 276.712 188.36C283.781 198.485 302.751 215.648 328 207.283" className="stroke1"/>
                <path d="M40 154C49.0411 155.66 72.6466 165.553 94.7397 191.846C99.5036 198.187 108.78 205.453 120.5 208.5" data-tip= 'Welcome Newcomers!' data-for='svgTooltip' className="stroke2"/>
                <path d="M153.5 330L40.0839 271.559C39.4183 271.216 39 270.529 39 269.781V37.3832C39 35.8618 40.6312 34.8975 41.9641 35.6309L153.5 97M153.5 330V97M153.5 330L267.5 271M153.5 97L267.5 34M267.5 34V271M267.5 34L381.922 93.44C382.584 93.7841 383 94.4684 383 95.2148V326.733C383 328.227 381.421 329.193 380.09 328.514L267.5 271" className="stroke3"/>
                <path d="M67 253.321V220.814C67 219.309 68.6003 218.343 69.9321 219.045L121.932 246.437C122.589 246.783 123 247.465 123 248.207V282.107C123 283.63 121.364 284.595 120.031 283.857L68.0314 255.071C67.395 254.719 67 254.049 67 253.321Z" className="stroke4"/>
                <path d="M334 144.5C317.6 142.1 312.833 154.833 312.5 161.5C310.967 173.385 328.601 205.508 338.727 221.951C339.386 223.022 340.84 223.211 341.749 222.343C347.164 217.171 363.421 201.321 365.5 195.5C368 188.5 369.833 180.167 369 176.5C361.4 151.7 342.5 144.833 334 144.5Z" className="stroke5"/>
                <path d="M338.36 163.238C331.406 161.625 330.633 168.614 331.116 172.309C331.889 178.76 337.877 182.389 340.775 183.397C346.571 185.816 348.663 180.373 348.985 177.349C349.372 167.673 342.063 163.91 338.36 163.238Z" className="stroke6" />
            </svg>
            <ReactTooltip id='svgTooltip' />
        </NewcomersMapWrapper>
    );
};

export default NewcomersMap;
