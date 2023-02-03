import React from "react";

const ButtonFeatures = (props) => {
  return (
    <div className="flex justify-center gap-6 m-4">
      <button
        onClick={props.onShowPosts}
        className="bg-green-500 text-white font-bold rounded-md p-2 w-[120px]"
      >
        {props.isShowPosts && "hide posts"}
        {!props.isShowPosts && "show posts"}
      </button>
      <button
        onClick={props.onShowForm}
        className="bg-green-500 text-white font-bold rounded-md p-2 w-[120px]"
      >
        New Post
      </button>
    </div>
  );
};

export default ButtonFeatures;
