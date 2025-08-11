import React, { useState } from "react";
import "./App.css";
import Display from "./Display.jsx";
import List from "./List.jsx";

function App() {
  const [postId, setPostId] = useState(null);
  return (
    <div className="App">
      <List setPostId={setPostId} />
      <Display postId={postId} />
    </div>
  );
}

export default App;
