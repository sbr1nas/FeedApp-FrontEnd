import { initializeApp } from "firebase/app"; 
import { getAuth } from "firebase/auth"; 

const firebaseConfig = {
    apiKey: "AIzaSyCQ-73yOI_zuCNYZcrc-VplQ_PXvgEUOao",
    authDomain: "feed-app-35748.firebaseapp.com",
    projectId: "feed-app-35748",
    storageBucket: "feed-app-35748.appspot.com",
    messagingSenderId: "287460893893",
    appId: "1:287460893893:web:831043754780ecbf8abcac"
  };

  const app =  initializeApp(firebaseConfig);
  const auth = getAuth(app);

  export {auth};