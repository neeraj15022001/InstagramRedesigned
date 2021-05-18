import React from "react";
import FeedCard from "../reusable/FeedCard/FeedCard";
import female from "../../assets/female.jpg";

function Feed() {
  return (
    <div>
      <div className="px-3 d-flex align-items-center justify-content-between">
        <p className="fs-4">Feed</p>
        <div className="d-flex align-items-center justify-content between">
          <p className="fs-6">Latest</p>
          <p className="fs-6 ms-4">Popular</p>
        </div>
      </div>
      <div className="row px-3">
        <div className="col">
          <FeedCard
            image={female}
            imageName="female"
            instaUsername="candice.king"
          />
        </div>
        <div className="col">
          <FeedCard
            image={female}
            imageName="female"
            instaUsername="candice.king"
          />
        </div>
        <div className="col">
          <FeedCard
            image={female}
            imageName="female"
            instaUsername="candice.king"
          />
        </div>
      </div>
      <div className="row px-3">
        <div className="col">
          <FeedCard
            image={female}
            imageName="female"
            instaUsername="candice.king"
          />
        </div>
        <div className="col">
          <FeedCard
            image={female}
            imageName="female"
            instaUsername="candice.king"
          />
        </div>
        <div className="col">
          <FeedCard
            image={female}
            imageName="female"
            instaUsername="candice.king"
          />
        </div>
      </div>
      <div className="row px-3">
        <div className="col">
          <FeedCard
            image={female}
            imageName="female"
            instaUsername="candice.king"
          />
        </div>
        <div className="col">
          <FeedCard
            image={female}
            imageName="female"
            instaUsername="candice.king"
          />
        </div>
        <div className="col">
          <FeedCard
            image={female}
            imageName="female"
            instaUsername="candice.king"
          />
        </div>
      </div>
    </div>
  );
}

export default Feed;
