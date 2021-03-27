import React, { useState } from "react";
import "./login.css";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";

export default function Login() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [profilepic, setProfilepic] = useState("");
  const dispatch = useDispatch();

  const register = () => {
    if (!name) {
      return alert("Please enter a full name!");
    }
    auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
      // once we create the user we go in to the user and update
      //  displayName and photoUrl are the keys of firebase,should be same
      userAuth.user
        .updateProfile({
          displayName: name,
          photoURL: profilepic,
        })
        .then(() => {
          //this point we push the user into redux store
          dispatch(
            login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: name,
              photoURL: profilepic,
             
            })
          );
        });
    }).catch(err => alert(err))
  };
  const loginToApp = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email,password).then((userAuth)=>{
      dispatch(login({
        email: userAuth.user.email,
        uid: userAuth.user.uid,
        displayName: userAuth.displayName,
        photoURL: userAuth.photoURL,

      }))
    }).catch(err =>alert(err))
  };
  return (
    <div className="login">
      <img
        src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
        alt="LinkedIn logo"
      />
      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Full name (required if registering)"
        />
        <input
          value={profilepic}
          onChange={(e) => setProfilepic(e.target.value)}
          type="text"
          placeholder="Profile pic URL (optional)"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <button onClick={loginToApp}>Sign In</button>
      </form>
      <p>
        Not a Member?{" "}
        <span className="login_register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}
