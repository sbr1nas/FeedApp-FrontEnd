import React, { useState, useEffect } from "react";
import "./home.css";
import AddPost from "../../components/addPost/AddPost";
import PostCard from "../../components/postCard/PostCard";
import dummyPost from "../../dummyPost.json";
import { getFeedsApi } from "../../util/ApiUtil";
import LoadingIndicator from "../../components/loadingIndicator/LoadingIndicator";

const Home = ({ currentUser }) => {
  const IMAGE_DEFAULT = "https://img.freepik.com/free-vector/image-upload-illustration-concept_114360-776.jpg?w=900&t=st=1670297244~exp=1670297844~hmac=47f2df77a71ed890b25ab6c10c0c55450faccb5a0ed4d4e65b51ed553d50e2f8";
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const apiResponse = await getFeedsApi(
      currentUser.token,
      currentUser.username
    );
  
    if (apiResponse && apiResponse.length > 0) {
      const postsArr = []; 
      apiResponse.forEach(({ post, imageMetaData }) => {
        let postObj = { post, postImageUrl: IMAGE_DEFAULT, postDate: "N/A" };
        if (imageMetaData.length > 0) {
          postObj.postImageUrl = imageMetaData[0].imageName; 
          postObj.postDate = imageMetaData[0].imageDate;
        }
        postsArr.push(postObj); 
      });
      setPosts(postsArr);
    }
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingIndicator fullPage />;
  }

  return (
    <div className="bg-[#fafafa]" id="home-container">
      <AddPost currentUser={currentUser} />
        <h1 class="text-3xl font-semibold text-indigo-700 capitalize lg:text-4xl" id="recent-header">
          Recent Timeline
        </h1>
        <div class="scroll-container">
        <div class="container px-6 py-10 mx-auto" id="home-scroll">
        <div class="grid grid-cols-1 gap-8 mt-8  md:grid-cols-2">
          {posts.map(({ post, postImageUrl, postDate }) => {
            return (
              <PostCard
                post={post}
                postImageUrl={postImageUrl}
                postDate={postDate}
              />
            );
          })}
          </div>
          <div class="grid grid-cols-1 gap-8 mt-8  md:grid-cols-2"> 
          {dummyPost.map(({ post, postImageUrl, postDate }) => {
            return (
              <PostCard
                post={post}
                postImageUrl={postImageUrl}
                postDate={postDate}
              />
            );
          })}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Home;