import { useState } from "react"; 
import Slider from "react-slick";
import Lost from "../../images/lost.jpg";
import SignUp from "../../images/signup_vector.png";
import "./intromodal.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const IntroModal = ({ setIsOpen }) => {
    const [nav1, setNav1] = useState(null);

    return(
        <dialog id="intro-box" open>
            <div id= "dialog-box" onDoubleClick={() => setIsOpen(false)}>
            <div id="slider-container" onDoubleClick={() => setIsOpen(false)}>
            <Slider 
                infinite={true}
                slidesToShow= {1}
                dots={true}
                slidesToScroll={1}
                autoplay={true}
                autoplaySpeed={2000}
                pauseOnHover={true}>
                <div className="slides" onDoubleClick={() => setIsOpen(false)}>
                    <h1 className="carouselText"> LOST? </h1>
                    <img className="carouselImg" src={Lost} />
                </div>
                <div className="slides" onDoubleClick={() => setIsOpen(false)}>
                    <img className="carouselImg" src={SignUp} />
                    <h2 className="carouselText"> SIGN UP? </h2>
                </div>
            </Slider>
            </div>
            </div>
        </dialog>
    );
};

export default IntroModal; 
