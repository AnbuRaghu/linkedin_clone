import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import "./sidebar.css";

export default function SideBar() {
  // we get the user from redux store
  const user = useSelector(selectUser);
  const recentItem = (topic) => (
    <div className="sidebar_recentItem">
      <span className="sidebar_hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img
          src="https://www.bing.com/th?id=OIP.egbRBnv0CT2sir_uEAs4OAHaHa&w=204&h=204&c=8&rs=1&qlt=90&dpr=1.25&pid=3.1&rm=2"
          alt=""
        />
        <Avatar src={user.photoUrl} className="sidebar_avatar">
          {user.email[0].toUpperCase()}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewd you</p>
          <p className="sidebar_statNumber">2,543</p>
        </div>
        <div className="sidebar_stat">
          <p>views on post</p>
          <p className="sidebar_statNumber">2,448</p>
        </div>
      </div>
      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("Softwareegineering")}
        {recentItem("design")}
        {recentItem("developer")}
      </div>
    </div>
  );
}
