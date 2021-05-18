import React from "react";
import SearchInput from "./SearchInput/SearchInput";
import PostButton from "./PostButton/PostButton";

function Navbar() {
  return (
    <div className="w-100 p-3 d-flex align-items-center justify-content-between">
      <SearchInput />
      <PostButton />
    </div>
  );
}

export default Navbar;
