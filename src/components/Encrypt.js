import "./Encrypt.css";
import React, { useState } from "react";
import { TiArrowBackOutline } from "react-icons/ti";
import { PiCopySimpleBold } from "react-icons/pi";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const Encrypt = () => {
  const [encrpt, setEnncrpt] = useState("");

  function changeHandler(event) {
    setEnncrpt(event.target.value);
  }
  function clickHandler() {
    if (encrpt.length > 0) {
      let arr = encrpt.split(" ");
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > 1) {
          arr[i] = arr[i].slice(1) + arr[i][0] + "erb";
        } else if (arr[i].length === 1) {
          arr[i] += "ja";
        }
      }
      arr = arr.join(" ");
      let ele = document.querySelector(".create");
      const elet = document.querySelector(".created");
      ele.classList.remove("hide");
      elet.textContent = `${arr}`;
    }
  }
  function submitHandler(event) {
    event.preventDefault();
    setEnncrpt("");
  }
  function copyHandler() {
    const elet = document.querySelector(".created").textContent;
    navigator.clipboard.writeText(elet);
    document.querySelector(".copy").classList.add("act");
    setTimeout(() => {
      document.querySelector(".copy").classList.remove("act");
    }, 1000);
  }

  return (
    <>
      <div className="Encrypt">
        <div className="clr1"></div>
        <div className="clr2"></div>
        <div className="conte">
          <div className="logoe">
            <img src="logo.png" alt="logo" />
          </div>
          <div className="containere">
            <div className="tope">
              Welcome to <span>EnCrypt</span>,
            </div>
            <div className="bottome">
              Safeguard your text messages with our advanced encryption
              solutions.
            </div>
          </div>
        </div>
        <form onSubmit={submitHandler} className="btnse">
          <textarea
            value={encrpt}
            onChange={changeHandler}
            className="dece"
            placeholder="Write the text you want to Encrypt."
          ></textarea>
          <div className="butd">
            <Link to="/">
              <button className="bkbtn">
                <TiArrowBackOutline value={{ className: "icons" }} />
              </button>
            </Link>
            <button onClick={clickHandler} className="ence">
              Encrypt
            </button>
          </div>
          <div className="create hide">
            <div className="created"></div>
            <div className="crbtn" onClick={copyHandler}>
              <PiCopySimpleBold />
            </div>
            <div className="copy">Copied!</div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Encrypt;
