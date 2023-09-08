import React, { useState, useEffect } from "react";
import "./Header.css";
import { CgProfile } from "react-icons/cg";

export default function Header({ setSearchText, forwardref }) {
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    const delaySearch = setTimeout(() => {
      setSearchText(inputText);
    }, 200);

    return () => {
      clearTimeout(delaySearch);
    };
  }, [inputText, setSearchText]);

  return (
    <>
      <nav>
        <ul className="navbar">
          <li className="navbarLi">
            <img
              className="logoimg"
              alt="logo"
              src="https://ik.imagekit.io/socialboat/Component_6__1__CgPWY-2O0.png?ik-sdk-version=javascript-1.4.3&updatedAt=1663242315232"
            />
            <span className="logoText">SocialBoat</span>
          </li>
          <li className="navbarLi">
            <input
              ref={forwardref}
              className="searchbar"
              placeholder="Search For Videos"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
          </li>
          <li className="navbarLi">
            <CgProfile />
          </li>
        </ul>
      </nav>
    </>
  );
}
