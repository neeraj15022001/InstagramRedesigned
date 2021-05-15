import React from "react";
import "./Avatar.css";

function Avatar({ imagePath, imageName, widthClass, paddingClass,borderWidthClass, borderHeight, borderWidth }) {
  return (
    <div className={`Avatar border ${borderWidthClass} d-inline-block rounded-circle border-ThemePink ${borderHeight} ${borderWidth}`}>
      <div className="d-flex align-items-center justify-content-center h-100 w-100">
        <img
          className={`${widthClass} ${paddingClass} rounded-circle box-sizing-unset`}
          src={imagePath}
          alt={imageName}
        />
      </div>
    </div>
  );
}

export default Avatar;
