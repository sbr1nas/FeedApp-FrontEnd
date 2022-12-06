import PostCard from "../../components/postCard/PostCard";
import dummyPost from "../../dummyPost.json";
import  "./modals.css";

const Modals = ({ setIsOpen, postIndex, postObject, setIsApiOpen }) => {
    if (postObject) {
      let { post, postDate, postImageUrl } = postObject;
      return (
        <dialog id="modal-post" open>
        <div onClick={() => setIsApiOpen(false)}>
              <PostCard post={post} postImageUrl={postImageUrl} postDate={postDate}/>
        </div>
      </dialog>
      )
    } else{
    return (
      <dialog id="modal-post" open>
        <div onClick={() => setIsOpen(false)}>
              <PostCard post={dummyPost[postIndex].post} postImageUrl={dummyPost[postIndex].postImageUrl} postDate={dummyPost[postIndex].postDate}/>
        </div>
      </dialog>
    );
  }};

  export default Modals; 