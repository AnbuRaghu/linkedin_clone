import React, { useEffect } from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import "./App.css";
import Feed from "./Feed";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import Login from "./Login";
import { auth } from "./firebase";
import Widgets from "./Widget";

export default function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //user is logged in
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.displayName,
            photoURL: userAuth.photoURL,
          })
        );
      } else {
        //logged out
        dispatch(logout());
      }
    });
  }, [dispatch]);
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app_body">
          <SideBar />
          <Feed />
          <Widgets />


          {/* App body */}
          {/* sidebar */}
          {/* feed */}
          {/* widget */}
        </div>
      )}
    </div>
  );
}
