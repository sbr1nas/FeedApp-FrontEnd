import { useNavigate } from 'react-router-dom';
import Lost from "../images/lost.jpg";
import './Redirect.css';
export default function Redirect () {

const navigate = useNavigate(); 
const navigateRedirect = () => {
    navigate('/login');
};

    return (
        <hgroup>
            <article>
            <div>
                <img src={Lost} alt="person lost at diverging path" />
                <h1> ARE YOU SUPPOSED TO BE HERE?</h1>
                <button onClick={navigateRedirect}>Click Here to Find Your Way!</button>                           
            </div>
            </article>
        </hgroup>
      
    )
}