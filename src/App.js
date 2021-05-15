import React from 'react'
import "./App.css"
import Avatar from "./components/reusable/Avatar/Avatar"
import UserFollowers from './components/reusable/UserFollowers/UserFollowers'
import ListItem from "./components/reusable/ListItem/ListItem"
import FeedCard from "./components/reusable/FeedCard/FeedCard"
import Sidebar from "./components/SideBar/Sidebar"
import male from "./assets/male.jpg"
import female from "./assets/female.jpg"

function App() {
  return (
    <div className="App">
      <Sidebar />
      {/* <FeedCard image={female} imageName="female" instaUsername={"avishkaa._"} /> */}
      {/* <Avatar imagePath={male} imageName={"male"} /> */}
      {/* <UserFollowers value="46" label="Posts" /> */}
      {/* <ListItem iconClass={"bi-grid-fill"} label={"Feed"} /> */}
    </div>
  )
}

export default App
