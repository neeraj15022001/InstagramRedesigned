import React from "react";
import "./FeedCard.css";
import Avatar from "../Avatar/Avatar";
import FeedCardLikeSection from "./FeedCardLikeSection"

function FeedCard({ image, imageName,instaUsername }) {
  return (
    <div className="FeedCard">
      <div className="d-flex flex-column">
        <img src={image} alt={imageName} className="w-25 rounded-4" />
        <div className="d-flex align-items-center justify-content-between py-2 w-25 px-1">
          <div className="d-flex align-items-center justify-content-between">
            <Avatar
              imageName={imageName}
              imagePath={image}
              widthClass={"w-1"}
              paddingClass={"p-01"}
              borderWidthClass={"border-1"}
            />
            <span className="FeedCard__label ms-2">{instaUsername}</span>
          </div>
          <div className="d-flex align-items-center justify-content-end flex-fill">
            <FeedCardLikeSection iconClass={"bi-heart"} value={"218"} />
            <div className="w-1"></div>
            <FeedCardLikeSection iconClass={"bi-chat"} value={"12"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedCard;
