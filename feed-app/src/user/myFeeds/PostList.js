import { useState, useEffect } from "react";
import Modals from "./Modals"; 
import dummyPost from "../../dummyPost.json";
import "./postlist.css";
import LoadingIndicator from "../../components/loadingIndicator/LoadingIndicator";
import { getMyFeedsApi } from "../../util/ApiUtil";

const PostList = ({ currentUser }) => {
  const IMAGE_DEFAULT = "https://via.placeholder.com/500";
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false); 
  const [isApiOpen, setIsApiOpen] = useState(false);
  const [posts, setPosts] = useState([]);

  const [postIndex, setPostIndex] = useState(0); 

  useEffect(() => {
    getMyPosts();
  }, []);

  const getMyPosts = async () => {
    const apiResponse = await getMyFeedsApi(
      currentUser.token,
      currentUser.username
    );
    if (apiResponse && apiResponse.length > 0) {
      const postsArr = [];
      console.log(apiResponse);
      let index =0; 
      apiResponse.forEach(({ post, postID, imageMetaData }) => {
        index += 1; 
        let postObj = { post, postID: index, postImageUrl: IMAGE_DEFAULT, postDate: "N/A" };
        if (imageMetaData.length > 0) {
          postObj.postImageUrl = imageMetaData[0].imageName;
          postObj.postDate = imageMetaData[0].imageDate;
        }
        console.log(postObj);
        postsArr.push(postObj);
      });
      setPosts(postsArr); 
    }
    setIsLoading(false); 
  };

  if(isLoading){
    return <LoadingIndicator fullpage />;
  }


  return (
    <>
    <div className= "feedgrid-container">
    <h1>MY FEED</h1>
    <div id="feedgrid">
      {posts.map(({ post, postImageUrl, postDate, postID }) => {
        return (
          <a onClick={() => setIsApiOpen(true)}>
                  <img className="feedgrid-images" src={postImageUrl} alt={postDate} onClick={() => setPostIndex(postID - 1)}/>
              </a>       
        );
      })}
      {isApiOpen && <Modals setIsOpen={setIsOpen} setIsApiOpen={setIsApiOpen} postIndex={postIndex} postObject={posts[postIndex]} />}
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