import React, { useState, useEffect } from "react";

function Display({ postId }) {
  const [post, setPost] = useState(null);
  useEffect(() => {
    if (postId) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then((res) => res.json())
        .then((data) => setPost(data))
        .catch((error) => console.error("Error fetching Post: ", error));
    } else {
      setPost(null);
    }
  }, [postId]);
  return (
    <div>
      {post ? (
        <>
          <h3>Selected Post: {post.title}</h3>
          <p>{post.body}</p>
        </>
      ) : (
        <p>Select a post to view its details</p>
      )}
    </div>
  );
}

export default Display;
