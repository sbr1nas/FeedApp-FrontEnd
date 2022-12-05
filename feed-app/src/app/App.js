import React, { useEffect, useState, useContext } from "react";
import './App.css';
import { Layout } from "antd";
import LoadingIndicator from "../components/loadingIndicator/LoadingIndicator";
import { AppContext } from "../context/applicationContext";
import  NonRestrictedRoutes from "../components/routes/NonRestrictedRoutes";
import RestrictedRoutes from "../components/routes/RestrictedRoutes";

const { Content } = Layout; 

const App = () => {
  const appContext = useContext(AppContext);
  const userData = appContext.getSession(); 

  const [currentUser, setCurrentUser] = useState(null); 
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    if (userData) {
      setCurrentUser(userData); 
      setIsAuthenticated(true);      
    } else {
      setIsAuthenticated(false);
    }
  }, [userData]); 

  if (isAuthenticated === null ) return <LoadingIndicator fullPage />;

 if (isAuthenticated === false) {
  return (
    <Layout className="layout">
      <Content className="app-content">
        <div className="container">
          <NonRestrictedRoutes />
          </div>
          </Content>
          </Layout>
  );
 } else{
  return(
    <Layout className="layout">
      <Content className="app-content">
        <div className="container">
          <RestrictedRoutes currentUser = {currentUser} />
          </div>
          </Content>
          </Layout>
  );
 }
};

export default App; 

