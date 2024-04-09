import React, { useState } from 'react';

const Post = ({ title, content }) => {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <button onClick={handleLike}>Like</button>
      <p>{likes} likes</p>
     
    </div>
  );
};

export default Post;