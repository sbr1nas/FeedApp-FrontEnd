import { useState } from "react"; 
import Slider from "react-slick";
import Community from "../../images/community.webp";
import Exclusivity from "../../images/exclusivity.webp";
import Reliability from "../../images/reliablity.webp";
import Security from "../../images/security.webp";
import Creativity from "../../images/creativity.webp"
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
                    <div className="paras">
                    <h1 className="topline">COMMUNITY</h1><br />
                    <h3>Our priority will <b>ALWAYS</b> be fostering an <b>INCLUSIVE</b>, safe, and <b>ENCOURAGING</b> community. Our adherence to community guidelines means you can actually kick back and relax, even on the internet! This is <b>OUR</b> community so we're always open to new ideas!!</h3> 
                    <br/>
                    <h2 className="bottomline">COME SHARE WITH US</h2>
                    </div>
                    <img className="carouselImg" id="community-img" src={Community} />
                </div>
                <div className="slides" onDoubleClick={() => setIsOpen(false)}>
                <img className="carouselImg" id="exclusivity-img" src={Exclusivity} />
                <div className="paras">
                    <h1 className="topline">EXCLUSIVITY</h1><br />
                    <h3>We trust our family to want the best for our space. Which is why you can only register via <b>INVITATION!</b> Figure out which of your friends is your in and treat them. If you surround yourself with <b>AMAZING</b> people, you should be finding your invite soon...</h3> 
                    <br/>
                    <h2 className="bottomline">COME JOIN US</h2>
                    </div>
                </div>
                <div className="slides" onDoubleClick={() => setIsOpen(false)}>
                <div className="paras">
                    <h1 className="topline">RELIABILITY</h1><br />
                    <h3>We know what it takes to put yourself out there, to build up community, and to grow a network. That's why we <b>PROMISE</b> to never take your efforts for granted. You can be sure that we'll do our best to keep this community, and everything you've contributed to it <b>SAFE</b> No hostile takeovers by petulant billionaires in our future!!</h3> 
                    <br/>
                    <h2 className="bottomline">COME TRUST US</h2>
                    </div>
                    <img className="carouselImg" id="reliability-img" src={Reliability} />
                </div>
                <div className="slides" onDoubleClick={() => setIsOpen(false)}>
                <img className="carouselImg" id="security-img" src={Security} />
                <div className="paras">
                    <h1 className="topline">SECURITY</h1><br />
                    <h3>We trust our family to want the best for our space. Which is why you can only register via <b>INVITATION!</b> Figure out which of your friends is your in and treat them. If you surround yourself with <b>AMAZING</b> people, you should be finding your invite soon...</h3> 
                    <br/>
                    <h2 className="bottomline">COME RELAX WITH US</h2>
                    </div>
                </div>
                <div className="slides" onDoubleClick={() => setIsOpen(false)}>
                <div className="paras">
                    <h1 className="topline">CREATIVITY</h1><br />
                    <h3>Whether you're writing fanfiction, blogs, articles or taking photos of babies, food, landscapes, or maybe you're looking for a place to connect, share a recipe, post an embarrassing clip, rant about your superior ship....we have space for <b>YOU</b> Nothing is too <b>NICHE</b> for us. We want to see it <b>all</b> and help you share your special thing with <b>EVERYONE</b></h3> 
                    <br/>
                    <h2 className="bottomline">COME CREATE WITH US</h2>
                    </div>
                    <img className="carouselImg" id="creativity-img" src={Creativity} />
                </div>
            </Slider>
            </div>
            </div>
        </dialog>
    );
};

export default IntroModal; 
