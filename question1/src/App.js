import { useState, useEffect, Fragment } from "react";
import fetchPost from "./helpers/fetchPosts";
import Posts from "./components/Posts";
import ButtonFeatures from "./components/ButtonFeatures";
import Form from "./components/Form";
import Modal from "./UI/Modal";

function App() {
  const [posts, setPosts] = useState([]);
  const [isShowPosts, setIsShowPosts] = useState(false);
  const [isShowForm, setIsShowForm] = useState(false);

  useEffect(() => {
    fetchPost().then((data) => setPosts(data));
  }, []);

  const showPostsHandler = () => {
    setIsShowPosts((prev) => !prev);
  };
  const showFormHandler = () => {
    setIsShowForm((prev) => !prev);
  };
  const addNewPostHandler = (newPost) => {
    newPost.id = Math.floor(Math.random() * 10000);
    setPosts((prev) => [newPost, ...prev]);
  };
  const removePostHandler = (id) => {
    let newPosts = posts.filter((post) => post.id !== id);
    setPosts(newPosts);
  };

  return (
    <Fragment>
      <ButtonFeatures
        isShowPosts={isShowPosts}
        onShowForm={showFormHandler}
        onShowPosts={showPostsHandler}
      />
      {isShowPosts && <Posts onRemovePost={removePostHandler} posts={posts} />}
      {isShowForm && (
        <Modal onCloseForm={showFormHandler}>
          <Form
            onAddNewPost={addNewPostHandler}
            onCloseForm={showFormHandler}
          />
        </Modal>
      )}
    </Fragment>
  );
}

export default App;
