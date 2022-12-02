import PostCard from "../../components/postCard/PostCard";
import dummyPost from "../../dummyPost.json";
import  "./modals.css";

const Modals = ({ setIsOpen, postIndex }) => {
    return (
      <dialog id="modal-post" open>
        <div onClick={() => setIsOpen(false)}>
              <PostCard post={dummyPost[postIndex].post} postImageUrl={dummyPost[postIndex].postImageUrl} postDate={dummyPost[postIndex].postDate}/>
        </div>
      </dialog>
    );
  };

  export default Modals; 