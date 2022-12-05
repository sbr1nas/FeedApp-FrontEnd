import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Header from "../header/Header";
import Profile from "../../user/profile/Profile";
import Home from "../../user/home/Home";
import PostList from "../../user/myFeeds/PostList";

const RestrictedRoutes = ( {currentUser} ) => {
    
    return (
        <Routes>
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route exact path="/profile" element={<Header><Profile currentUser={currentUser} /></Header>} />
            <Route exact path = "/" element={<Header><Home currentUser={currentUser} /></Header>} /> 
            <Route exact path = "/myFeeds" element={<Header><PostList currentUser={currentUser}/></Header>} /> 
          </Routes>
    )
};

export default RestrictedRoutes; 