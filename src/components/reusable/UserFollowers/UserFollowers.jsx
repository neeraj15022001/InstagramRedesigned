import React from "react";

function UserFollowers({ value, label, border }) {
  const borderRight = border ? "border-end border-ThemeSecondaryDark" : "";
  return (
    <div className={`UserFollowers d-inline-block px-4 ${borderRight}`}>
      <div className="d-flex flex-column align-items-center">
        <span className="fw-bolder text-ThemeWhite text-small">{value}</span>
        <span className="text-ThemeTertiaryDark text-x-small">{label}</span>
      </div>
    </div>
  );
}

export default UserFollowers;
