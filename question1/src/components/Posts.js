import React from "react";

const Posts = (props) => {
  const { posts } = props;

  return (
    <div className="container mx-auto px-4 py-2">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <div className="p-2 shadow flex flex-col justify-between" key={index}>
            <div className="flex justify-between">
              <p className="font-bold">
                Post ID:{" "}
                <span className="font-bold text-blue-500">#{post.id}</span>
              </p>
              <p className="font-bold">
                User ID:{" "}
                <span className="font-bold text-blue-500">#{post.userId}</span>
              </p>
            </div>
            <p>
              <span className="font-bold">Title: </span>
              {post.title}
            </p>
            <p>
              <span className="font-bold">Body: </span>
              {post.body}
            </p>
            <div className="flex justify-end mt-2">
              <button
                onClick={props.onRemovePost.bind(null, post.id)}
                className="bg-red-500 text-white p-1 rounded-md font-bold"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
