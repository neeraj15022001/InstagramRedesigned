import React from "react";
import "./ListItem.css";

function ListItem({ iconClass, label }) {
  return (
    <div className="d-inline-block w-100 ListItem border-end border-3 border-ThemePink py-2">
      <d className="d-flex align-items-center">
        <i className={`bi ${iconClass} text-ThemePink fs-4`}></i>
        <span className="ms-4">{label}</span>
      </d>
    </div>
  );
}

export default ListItem;
