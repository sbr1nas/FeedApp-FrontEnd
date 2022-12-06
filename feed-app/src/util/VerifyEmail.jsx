import React from "react";
import { auth } from "../util/FirebaseConfig";
import {sendEmailVerification} from "firebase/auth";
import "./verifyemail.css";
import SentEmail from "../images/send_email.png";
import toast from "react-hot-toast";

const VerifyEmail = () => {

    const resendEmail = () => {
        sendEmailVerification(auth.currentUser);
        toast(`Verification Email Has Been Resent`, 
      {
        style:{
          border: "5px double #437777",
          background: "#fcc2c2",
          color: "#437777",
          marginTop: "30px",
          textAlign: "center",
          fontWeight: "bold"
        }
      });
    };

    return (
        <>
            <div id="email-container">
                <h1 id="email-title">🥳 VERIFICATION EMAIL SENT 🥳</h1>
                <img id="email-sent" src={SentEmail} alt="illustration of computer with emails being sent" />
                <h3 className="email-msg"> A Verification Email Has Been Sent</h3>
                <h2 className="email-msg"> Follow the instructions in the email to verify your account</h2>
                <button id="resend-btn" onClick={resendEmail}>Resend Email</button>
            </div>
        
        </>
    );
};

export default VerifyEmail; 