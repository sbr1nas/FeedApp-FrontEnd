import { useNavigate } from 'react-router-dom';
import Lost from "../images/lost.jpg";
import './Redirect.css';
export default function Redirect () {

const navigate = useNavigate(); 
const navigateRedirect = () => {
    navigate('/login');
};

    return (    
            <div className="redirect-container">
                <img className="redirect-img" src={Lost} alt="person lost at diverging path" />
                <h1 className="redirect"> ARE YOU SUPPOSED TO BE HERE?</h1>
                <button className="redirect-button" onClick={navigateRedirect}>Click Here to Find Your Way!</button>                           
            </div>
   
    )
}