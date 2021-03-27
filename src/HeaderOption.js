import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import "./headerOption.css";

export default function HeaderOption({ avatar, Icon, title, onClick }) {
  const user = useSelector(selectUser);
  return (
    <div onClick={onClick} className="headerOption">
      {/* if i pass the Icon */}
      {Icon && <Icon className="headerOption_icon" />}
      {avatar && (
        <Avatar className="headerOption_icon" src={user?.photoUrl}>
          {user?.email[0].toUpperCase()}
        </Avatar>
      )}
      <h3 className="headerOption_title">{title}</h3>
    </div>
  );
}
