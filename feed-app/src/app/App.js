import React, { useState } from "react";
import './App.css';
import { Route, Routes } from "react-router-dom";
import { Layout } from "antd";
import Header from "../components/header/Header";
import Login from "../user/login/Login";
import Redirect from "../components/Redirect";
import Signup from "../user/Signup";
import Profile from "../user/profile/Profile";
import Home from "../user/home/Home";
import MyFeeds from "../user/myFeeds/MyFeeds";
import PostList from "../user/myFeeds/PostList";

const { Content } = Layout; 

const App = () => {
  const [currentUser, setCurrentUser] = useState(null); 
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  return(
    <Layout className="layout">
      <Content className="app-content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Redirect />}/>
            <Route exact path="/login" element={<Login currentUser={currentUser} isAuthenticated={isAuthenticated}/>}/>
            <Route exact path="/signup" element={<Signup currentUser={currentUser} isAuthenticated={isAuthenticated}/>}/>
            <Route exact path = "/profile" element={<Header><Profile currentUser={currentUser} /></Header>} />
            <Route exact path = "/home" element={<Header><Home currentUser={currentUser} /></Header>} />          
            <Route exact path = "/myFeeds" element={<Header><PostList currentUser={currentUser}/></Header>} />
          </Routes>
        </div>
      </Content>
    </Layout> 
  );
};

export default App; 

