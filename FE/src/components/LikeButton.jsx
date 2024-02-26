import React, { useState } from "react";
import axiosInstance from "../utils/axios";

const LikeButton = ({ productId, initialLiked }) => {
  const [liked, setLiked] = useState(initialLiked);

  const handleLikeToggle = async () => {
    try {
      const response = await axiosInstance.put(`/like/${productId}`);
      if (response.status === 200 || response.status === 201) {
          setLiked(!liked);
      } else {
        console.error("Failed to toggle like:", response);
      }
    } catch (error) {
      console.error("Error toggling like:", error);
    }
  };

  return (
    <button onClick={handleLikeToggle}>
      {liked ? (
        <img src="/hearted.png" alt="liked" className="w-10" />
      ) : (
        <img src="/heart.png" alt="not liked" className="w-10" />
      )}
    </button>
  );
};

export default LikeButton;
