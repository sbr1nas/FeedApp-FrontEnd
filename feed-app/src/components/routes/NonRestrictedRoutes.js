import { Routes, Route, Navigate} from "react-router-dom";
import Login  from "../../user/login/Login";
import Signup from "../../user/Signup";

const NonRestrictedRoutes = () => {
    return (
        <Routes>
          <Route path="*" element={<Navigate to="/login" replace />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes> 
    )
};

export default NonRestrictedRoutes; 
        