import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BPTN from "../../images/bptn_logo.png";
import './landingpage.css';
import IntroModal from "./IntroModal";

const LandingPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navigate = useNavigate(); 

    

    return (   
            <React.Fragment>
            <div className="main-container">
                <div className="flip-container">
                    <div className = "flip-inner">
                    <div className = "flip-front">
                    <h2 id="welcome-header">WELCOME TO THE</h2>
                    <h1 id="landing-title">FEED APP</h1>
                    </div>
                    <div className="flip-back">
                    <h1 id="clickhere" onClick={() => {setIsOpen(true)}}>CLICK HERE TO LEARN MORE!</h1> 
                    </div>
                    </div>
                </div>
                <div classname="btn-container">
                <button className="landingbtn" onClick={() => {navigate('/login')}}> LOGIN </button>
                <button className="landingbtn" onClick={() => {navigate('/signup')}}> SIGNUP </button>
                <h2 id="poweredby"> Powered by <img id="bptnlogo" src={BPTN} alt="Obsidi by BPTN logo"/> </h2>
                </div>                           
            {isOpen && <IntroModal setIsOpen={setIsOpen} />} 
            </div>
            </React.Fragment> 

    );
};

export default LandingPage; 