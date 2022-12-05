import React, { useState } from "react";
import "./signup.css";
import SignupImage from "../images/signup_vector.png";
import { Form, Input, Button, Row, Col } from "antd";
import { Link, useNavigate } from "react-router-dom";
import {
  NAME_MIN_LENGTH,
  NAME_MAX_LENGTH,
  EMAIL_MAX_LENGTH,
  USERNAME_MIN_LENGTH,
  USERNAME_MAX_LENGTH,
  PASSWORD_MIN_LENGTH,
  PASSWORD_MAX_LENGTH,
  PHONE_MAX_LENGTH,
  PHONE_MIN_LENGTH
} from "../common/constants";
import { signUpApi } from "../util/ApiUtil";
import toast from "react-hot-toast";

const FormItem = Form.Item;

const validateName = (name) => {
  if (!name) {
    return {
      validateStatus: "warning",
      errorMsg: `Please input your name`,
    };
  }
  if (name.length < NAME_MIN_LENGTH) {
    return {
      validateStatus: "error",
      errorMsg: `Name is too short (Minimum ${NAME_MIN_LENGTH} characters)`,
    };
  }

  if (name.length > NAME_MAX_LENGTH) {
    return {
      validationStatus: "error",
      errorMsg: `Name is too long (Maximum ${NAME_MAX_LENGTH} characters)`,
    };
  }

  return {
    validateStatus: "success",
    errorMsg: null,
  };
};

const validateEmail = (email) => {
  if (!email) {
    return {
      validationStatus: "warning",
      errorMsg: "Please input your email",
    };
  }
  if (email.length > EMAIL_MAX_LENGTH) {
    return {
      validationStatus: "error",
      errorMsg: `Email is too long (Maximum ${EMAIL_MAX_LENGTH} characters)`,
    };
  }

  const EMAIL_REGEX = RegExp("[^@ ]+@[^@ ]+\\.[^@ ]+");
  if (!EMAIL_REGEX.test(email)) {
    return {
      validateStatus: "error",
      errorMsg: "Email not valid",
    };
  }
  
  return {
    validateStatus: "success",
    errorMsg: null,
  };
};

const validateUsername = (username) => {
  if (!username) {
    return {
      validateStatus: "warning",
      errorMsg: "Please create a username",
    };
  }
  if (username.length < USERNAME_MIN_LENGTH) {
    return {
      validateStatus: "error",
      errorMsg: `Username is too short (Minimum ${USERNAME_MIN_LENGTH} characters)`,
    };
  }

  if (username.length > USERNAME_MAX_LENGTH) {
    return {
      validationStatus: "error",
      errorMsg: `Username is too long (Maximum ${USERNAME_MAX_LENGTH} characters)`,
    };
  }
  return {
    validateStatus: "success",
    errorMsg: null,
  };
};

const validatePassword = (password) => {
  if (!password) {
    return {
      validateStatus: "warning",
      errorMsg: `Please create a password`,
    };
  }
  if (password.length < PASSWORD_MIN_LENGTH) {
    return {
      validateStatus: "error",
      errorMsg: `Password is too short (Minimum ${PASSWORD_MIN_LENGTH} characters needed.)`,
    };
  } else if (password.length > PASSWORD_MAX_LENGTH) {
    return {
      validationStatus: "error",
      errorMsg: `Password is too long (Maximum ${PASSWORD_MAX_LENGTH} characters allowed.)`,
    };
  } else {
    return {
      validateStatus: "success",
      errorMsg: null,
    };
  }
};

const validatePhone = (phone) => {
  if (!phone) {
    return {
      validateStatus: "warning",
      errorMsg: 'Please enter your phone number',
    };
  }
  if (phone.length < PHONE_MIN_LENGTH){
    return{
    validateStatus: "error",
    errorMsg: `Phone Number Not Valid (Minimum ${PHONE_MIN_LENGTH} characters needed.)`,
    };
  } else if (phone.length > PHONE_MAX_LENGTH){
    return{
      validateStatus: "error",
      errorMsg: `Phone Number Not Valid (Maximum ${PHONE_MAX_LENGTH} characters allowed)`,
    };
  } else {
    return {
      validateStatus: "success",
      errorMsg: null,
    };
  }
};

const Signup = () => {
  let navigate = useNavigate();

  const [name, setName] = useState({ value: "" });
  const [username, setUsername] = useState({ value: "" });
  const [email, setEmail] = useState({ value: "" });
  const [password, setPassword] = useState({ value: "" });
  const [phone, setPhone] = useState({ value: "" });


  const onFinish = async () => {
    const apiResponse = await signUpApi(
      username.value,
      name.value,
      email.value,
      phone.value,
      password.value
    );
     
    if(apiResponse){
      navigate("/login");
      toast(`Congratulations on successfully signing up!! 
      Please login to continue...`, 
      {
        style:{
          border: "5px double #437777",
          background: "#fcc2c2",
          color: "#437777",
          marginTop: "22px",
          textAlign: "center",
        }
      });
    } else{
      toast(`Hmmm....Looks like something's gone wrong. 
      Did you forget you already had an account?`, 
      {
        style:{
          border: "5px double #fcc2c2d0",
          background: "#437777",
          color: "#fcc2c2",
          marginTop: "250px",
        }});
    }
  };

  const handleInputChange = (event, validationFun) => {
    const target = event.target;
    const inputName = target.name;
    const inputValue = target.value;

    if (inputName === "name") {
      setName({
        value: inputValue,
        ...validationFun(inputValue),
      });
    } else if (inputName === "username") {
      setUsername({
        value: inputValue,
        ...validationFun(inputValue),
      });
    } else if (inputName === "email") {
      setEmail({
        value: inputValue,
        ...validationFun(inputValue),
      });
    } else if (inputName === "password") {
      setPassword({
        value: inputValue,
        ...validationFun(inputValue),
      });
    } else if (inputName === "phone"){
      setPhone({
        value: inputValue,
        ...validationFun(inputValue),
      });
    }
  };

  const isFormInvalid = () => {
    return !(
      name.validateStatus === "success" &&
      username.validateStatus === "success" &&
      email.validateStatus === "success" &&
      password.validateStatus === "success" &&
      phone.validateStatus === "success"
    );
  };

  return (
    <React.Fragment>
      <div className="wrapper">
        <img className="signup-image" src={SignupImage} />
      <div className="signup-box">
      <div className="signup-container">
        <Row type="flex" justify="center">
          <Col pan={24}>
            <div className="logo-container">
              <span className="welcome-msg">Welcome to Feed App</span>
              <h5 className="register-msg"> Let's get you registered!</h5>
            </div>
          </Col>
        </Row>
        <Row type="flex" justify="center">
          <Col pan={24}>
            <Form onFinish={onFinish} className="signup-form">
              <FormItem
                validateStatus={name.validateStatus}
                help={name.errorMsg}
                hasFeedback
                name="name"
              >
                <Input
                  size="large"
                  name="name"
                  placeholder="NAME"
                  value={name.value}
                  onChange={(event) => handleInputChange(event, validateName)}
                />
              </FormItem>
              <FormItem
                validateStatus={email.validateStatus}
                help={email.errorMsg}
                hasFeedback
                name="email"
              >
                <Input
                  size="large"
                  name="email"
                  placeholder="EMAIL"
                  value={email.value}
                  onChange={(event) => handleInputChange(event, validateEmail)}
                />
              </FormItem>
              <FormItem
                validateStatus={phone.validateStatus}
                help={phone.errorMsg}
                hasFeedback
                name="phone"
              >
                <Input
                  size="large"
                  name="phone"
                  placeholder="PHONE"
                  value={phone.value}
                  onChange={(event) => handleInputChange(event, validatePhone)}
                />
              </FormItem>
              <FormItem
                validateStatus={username.validateStatus}
                help={username.errorMsg}
                hasFeedback
                name="username"
              >
                <Input
                  size="large"
                  name="username"
                  placeholder="USERNAME"
                  value={username.value}
                  onChange={(event) =>
                    handleInputChange(event, validateUsername)
                  }
                />
              </FormItem>
              <FormItem
                validateStatus={password.validateStatus}
                help={password.errorMsg}
                hasFeedback
                name="password"
              >
                <Input
                  size="large"
                  name="password"
                  type="password"
                  placeholder="PASSWORD"
                  value={password.value}
                  onChange={(event) =>
                    handleInputChange(event, validatePassword)
                  }
                />
              </FormItem>
              <FormItem>
                <Button
                  type="primary"
                  htmlType="submit"
                  size="large"
                  className="signup-form-button"
                  disabled={isFormInvalid()}
                ><b className="signup-button-label">
                  REGISTER
                  </b>
                </Button>
              </FormItem>
            </Form>
          </Col>
        </Row>
      </div>
      <div className="login-link-container">
        Already have an account? <Link to="/login">LOGIN HERE!</Link>
      </div>
      </div>
      </div>
    </React.Fragment>
  );

};

export default Signup;