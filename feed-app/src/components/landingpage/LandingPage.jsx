import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Lost from "../../images/lost.jpg";
import './landingpage.css';
import IntroModal from "./IntroModal";

const LandingPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navigate = useNavigate(); 
    const navigateRedirect = () => {
        navigate('/login');
    };
    

    return (   
            <React.Fragment>
            <div className="redirect-container">
                <img className="redirect-img" src={Lost} alt="person lost at diverging path" />
                <h1 className="redirect"> ARE YOU SUPPOSED TO BE HERE?</h1>
                <div classname="btn-container">
                <button className="landingbtn" onClick={() => setIsOpen(true)}> WANT TO LEARN MORE? </button>
                <button className="landingbtn" onClick={navigateRedirect}>Click Here to Find Your Way!</button>
                </div>                           
            {isOpen && <IntroModal setIsOpen={setIsOpen} />}
            </div>
            </React.Fragment> 

    );
};

export default LandingPage; 