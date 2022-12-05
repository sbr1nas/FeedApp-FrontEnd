import React, { useContext} from "react";
import "./header.css";
import { Link } from "react-router-dom";
import Icon from "../../images/icon_main.png";
import DisplayPic from "../../images/displaypic_placeholder.jpg";
import { AppContext } from "../../context/applicationContext";

const Header = (props) => {
  const appContext = useContext(AppContext);

  const logout = () => {
    appContext.logout(); 
  };
  
  return (
    <>
      <header className="sticky top-0 z-50" id="header-custom">
        <nav
          id="header"
          className="w-screen z-30 bg-white shadow-lg border-b border-indigo-700"
        >
          <div className="w-full flex items-center justify-between mt-0 px-6 py-2">
            <div className="flex items-centerw-auto w-full " id="menu">
              <nav id="navbar">
                <ul className="flex items-center justify-between text-base text-indigo-700 " id="navbar-text">
                  <li>
                    <p className="inline-block no-underline hover:text-black font-bold text-lg py-2 px-4 lg:-ml-2" id="navbar-text-logo">
                      Feed App
                    </p>
                  </li>
                  <li>
                    <Link
                      id= "homelink"
                      className="inline-block no-underline hover:text-black font-normal text-lg py-2 px-4 lg:-ml-2"
                      to="/home"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      id= "myfeedslink"
                      className="inline-block no-underline hover:text-black font-normal text-lg py-2 px-4 lg:-ml-2"
                      to="/myFeeds"
                    >
                      My Feed
                    </Link>
                  </li>
                  <li>
                  <img id="icon-header" src={Icon} alt="main logo for feedapp. person emoticon holding newspaper" />
                  </li>
                  <li>
                    <Link
                      id="profilelink"
                      className="inline-block no-underline hover:text-black font-normal text-lg py-2 px-4 lg:-ml-2"
                      to="/profile"
                    >
                      Profile
                    </Link>
                  </li>
                  <li>
                    <div
                      className="inline-block no-underline hover:text-black font-normal text-lg py-2 px-4 lg:-ml-2"
                      onClick={() => logout()}
                    >
                      <Link to="/">
                      Logout
                      </Link>
                    </div>
                  </li>
                  <li>
                      <img className="profile-pic" src={DisplayPic} alt="user display pic" />
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </nav>
      </header>
      <main className="w-screen relative">{props.children}</main>
    </>
  );
};

export default Header;