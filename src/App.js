import React from "react";
import "./App.css";
import Sidebar from "./components/SideBar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import Stories from "./components/Stories/Stories";
import Feed from "./components/Feed/Feed";

function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col-3">
          <Sidebar />
        </div>
        <div className="col-9 content">
          <Navbar />
          <Stories />
          <div className="h-3"></div>
          <Feed />
        </div>
      </div>
    </div>
  );
}

export default App;
