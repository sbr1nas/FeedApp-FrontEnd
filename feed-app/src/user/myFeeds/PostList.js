import { useState, useEffect } from "react";
import Modals from "./Modals"; 
import dummyPost from "../../dummyPost.json";
import "./postlist.css";

import LoadingIndicator from "../../components/loadingIndicator/LoadingIndicator";

const PostList = ({ currentUser }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false); 

  const [postIndex, setPostIndex] = useState(0); 

  useEffect(() => {
    getMyPosts();
  }, []);

  const getMyPosts = () => {

  };
  if(isLoading){
    return <LoadingIndicator fullpage />;
  }

  return (
    <>
    <div className= "feedgrid-container">
    <h1>MY FEED</h1>
    <div id="feedgrid">
      {dummyPost.map(({ post, postImageUrl, postDate, postId }) => {
          return (
              <a onClick={() => setIsOpen(true)}>
                  <img className="feedgrid-images" src={postImageUrl} alt={postDate} onClick={() => setPostIndex(postId - 1)}/>
              </a>       
          );
      })}
      {isOpen && <Modals setIsOpen={setIsOpen} postIndex={postIndex} />}
    </div>
    </div>
    </>
  );
};

export default PostList; 