import React from "react";
import Avatar from "../reusable/Avatar/Avatar";
import male from "../../assets/male.jpg";
import "./Stories.css";

function Stories() {
  return (
    <div>
      <div className="d-flex align-items-center justify-content-between pe-3">
        <p className="fs-4 my-4 px-3">Stories</p>
        <button className="stories-button text-white">
          <i class="bi bi-play-circle"></i>
          <span className="ms-2">Watch All</span>
        </button>
      </div>
      <div className="h-6 w-100 px-3 Stories d-flex align-items-center justify-content-between">
        <Avatar
          imagePath={male}
          imageName="male"
          widthClass="w-5"
          paddingClass="p-1"
          borderWidthClass="border-2"
          borderHeight="h-6"
          borderWidth="w-6"
        />
        <Avatar
          imagePath={male}
          imageName="male"
          widthClass="w-5"
          paddingClass="p-1"
          borderWidthClass="border-2"
          borderHeight="h-6"
          borderWidth="w-6"
        />
        <Avatar
          imagePath={male}
          imageName="male"
          widthClass="w-5"
          paddingClass="p-1"
          borderWidthClass="border-2"
          borderHeight="h-6"
          borderWidth="w-6"
        />
        <Avatar
          imagePath={male}
          imageName="male"
          widthClass="w-5"
          paddingClass="p-1"
          borderWidthClass="border-2"
          borderHeight="h-6"
          borderWidth="w-6"
        />
        <Avatar
          imagePath={male}
          imageName="male"
          widthClass="w-5"
          paddingClass="p-1"
          borderWidthClass="border-2"
          borderHeight="h-6"
          borderWidth="w-6"
        />
        <Avatar
          imagePath={male}
          imageName="male"
          widthClass="w-5"
          paddingClass="p-1"
          borderWidthClass="border-2"
          borderHeight="h-6"
          borderWidth="w-6"
        />
        <Avatar
          imagePath={male}
          imageName="male"
          widthClass="w-5"
          paddingClass="p-1"
          borderWidthClass="border-2"
          borderHeight="h-6"
          borderWidth="w-6"
        />
        <Avatar
          imagePath={male}
          imageName="male"
          widthClass="w-5"
          paddingClass="p-1"
          borderWidthClass="border-2"
          borderHeight="h-6"
          borderWidth="w-6"
        />
        <Avatar
          imagePath={male}
          imageName="male"
          widthClass="w-5"
          paddingClass="p-1"
          borderWidthClass="border-2"
          borderHeight="h-6"
          borderWidth="w-6"
        />
        <Avatar
          imagePath={male}
          imageName="male"
          widthClass="w-5"
          paddingClass="p-1"
          borderWidthClass="border-2"
          borderHeight="h-6"
          borderWidth="w-6"
        />
        <Avatar
          imagePath={male}
          imageName="male"
          widthClass="w-5"
          paddingClass="p-1"
          borderWidthClass="border-2"
          borderHeight="h-6"
          borderWidth="w-6"
        />
        <Avatar
          imagePath={male}
          imageName="male"
          widthClass="w-5"
          paddingClass="p-1"
          borderWidthClass="border-2"
          borderHeight="h-6"
          borderWidth="w-6"
        />
        <Avatar
          imagePath={male}
          imageName="male"
          widthClass="w-5"
          paddingClass="p-1"
          borderWidthClass="border-2"
          borderHeight="h-6"
          borderWidth="w-6"
        />
        <Avatar
          imagePath={male}
          imageName="male"
          widthClass="w-5"
          paddingClass="p-1"
          borderWidthClass="border-2"
          borderHeight="h-6"
          borderWidth="w-6"
        />
      </div>
    </div>
  );
}

export default Stories;
