import React from "react";
import ListItem from "../ListItem/ListItem";
import LisItem from "../ListItem/ListItem";

function ListView() {
  return (
    <div className="w-100 ps-3">
      <ListItem iconClass={"bi-grid-fill"} label="Feed" />
      <ListItem iconClass="bi-search" label="Explore" />
      <LisItem iconClass="bi-bell" label="Notifications" />
      <LisItem iconClass="bi-reply" label="Direct" />
      <LisItem iconClass="bi-tv" label="IG TV" />
      <LisItem iconClass="bi-reception-4" label="Stats" />
      <LisItem iconClass="bi-gear" label="Settings" />
      <hr className="bg-ThemeSecondaryDark me-4" />
      <LisItem iconClass="bi-box-arrow-right" label="Logout" />
    </div>
  );
}

export default ListView;
