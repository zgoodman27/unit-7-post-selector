import React, { useState, useEffect } from "react";

function List({ setPostId }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching Posts: ", error));
  }, [posts]);
  return (
    <div>
      <h2>Post titles</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id} onClick={() => setPostId(post.id)}>
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
