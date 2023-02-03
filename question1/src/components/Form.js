import React, { useRef } from "react";

const Form = (props) => {
  const userIdRef = useRef();
  const titleRef = useRef();
  const descriptionRef = useRef();

  const submitFormHandler = (e) => {
    e.preventDefault();

    const newPost = {
      userId: userIdRef.current.value,
      title: titleRef.current.value,
      body: descriptionRef.current.value,
    };

    props.onAddNewPost(newPost);
    props.onCloseForm();
    alert("Successfully add new post");

    userIdRef.current.value = "";
    titleRef.current.value = "";
    descriptionRef.current.value = "";
  };

  return (
    <form onSubmit={submitFormHandler}>
      <h1 className="text-center font-bold tracking-wider uppercase text-lg">
        CREATE NEW POST
      </h1>
      <input
        type="number"
        ref={userIdRef}
        className="w-full p-2 focus:outline-blue-500 my-2 rounded-md border border-slate-400"
        placeholder="Your UserID"
        required
      />
      <input
        ref={titleRef}
        className="w-full p-2 focus:outline-blue-500 my-2 rounded-md border border-slate-400"
        placeholder="What is the title"
        required
      />
      <textarea
        ref={descriptionRef}
        className="w-full p-2 focus:outline-blue-500 my-2 rounded-md border border-slate-400"
        rows="5"
        cols="33"
        placeholder="Post description..."
        required
      />
      <div className="flex justify-end gap-4">
        <button
          onClick={props.onCloseForm}
          type="button"
          className="font-bold bg-blue-500 p-2 text-white rounded-md w-20"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="font-bold bg-blue-500 p-2 text-white rounded-md w-20"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
