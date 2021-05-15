import React from "react";
import Brand from "./Brand/Brand";
import Avatar from "../reusable/Avatar/Avatar";
import male from "../../assets/male.jpg";
import UserFollowers from "../reusable/UserFollowers/UserFollowers";
import ListView from "../reusable/ListView/ListView";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="w-16 bg-ThemeDark Sidebar py-2 ps-2">
      <Brand />
      <div className="h-1"></div>
      <div className="w-100 d-flex flex-column align-items-center justify-content-center">
        <Avatar
          borderWidthClass={"border-2"}
          imageName="male"
          imagePath={male}
          widthClass={"w-5"}
          paddingClass={"p-1"}
        />
        <div className="h-1"></div>
        <span className="fw-bolder">Michelle King</span>
        <span className="text-ThemeTertiaryDark text-x-small">@mi-jong</span>
        <div className="h-2"></div>
        <div className="d-flex align-items-center">
          <UserFollowers value="46" label="Posts" border={true} />
          <UserFollowers value="2.8k" label="Followers" border={true} />
          <UserFollowers value="526" label="Following" />
        </div>
        <div className="h-2"></div>
        <ListView />
      </div>
    </div>
  );
}

export default Sidebar;
