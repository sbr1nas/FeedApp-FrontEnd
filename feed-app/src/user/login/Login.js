import React, { useEffect } from "react"; 
import { useNavigate } from "react-router-dom"; 
import "./login.css";
import { Row, Col } from "antd"; 
import { Link } from "react-router-dom";
import LoginForm from "../../components/loginForm/LoginForm";
import Icon from "../../images/icon_main.png";

const Login = ({ currentUser, isAuthenticated }) => {
    let navigate = useNavigate(); 

    useEffect(() => {
        if(isAuthenticated) {
            navigate("/");
        }
    }, []);

    return(
        <React.Fragment>
            <div className="login-container">
            <img className="icon-main" src={Icon} />
            <div className="login-absolute-box"></div>
                
                <Row type="flex" justify="center">
                    <Col pan={24}>
                        <div className="logo-container">
                            <span>Feed App</span>
                            <h5 className="login-msg">Welcome Back!</h5>
                        </div>
                    </Col>
                </Row>
                <Row type="flex" justify="center">
                    <Col pan={24}>
                        <LoginForm />
                    </Col>
                </Row>
            </div>
            <div className="signup-box">
            <div className="signup-absolute-container"></div>
            <div className="signup-link-container">
                Don't have an account? <Link to="/signup">SIGN UP HERE!</Link>
            </div>
            </div>
        </React.Fragment>
    );
};

export default Login;