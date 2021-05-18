import React from "react";
import "./PostButton.css";

function PostButton() {
  return (
    <div className="d-flex align-items-center">
      <i className="bi bi-bell fs-4"></i>
      <i className="bi bi-chat-right fs-4 ms-4"></i>
      <button className="PostButton ms-4 text-white rounded-3 py-2 px-3 border-0">
        <i class="bi bi-plus-circle"></i>
        <span className="ms-2">Add Photo</span>
      </button>
    </div>
  );
}

export default PostButton;
