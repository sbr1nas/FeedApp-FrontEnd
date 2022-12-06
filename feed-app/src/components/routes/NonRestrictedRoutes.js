import { Routes, Route, Navigate} from "react-router-dom";
import Login  from "../../user/login/Login";
import Signup from "../../user/Signup";
import LandingPage from "../landingpage/LandingPage";
import VerifyEmail from "../../util/VerifyEmail";

const NonRestrictedRoutes = () => {
    return (
        <Routes>
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path = "/verify" element={<VerifyEmail />} />
        </Routes> 
    )
};

export default NonRestrictedRoutes; 
        