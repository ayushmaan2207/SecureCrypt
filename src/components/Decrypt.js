import "./Decrypt.css";
import React, { useState } from "react";
import { TiArrowBackOutline } from "react-icons/ti";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const Decrypt = () => {
  const [decrpt, setDecrpt] = useState("");

  function changeHandler(event) {
    setDecrpt(event.target.value);
  }
  function clickHandler() {
    let err= false;
    if (decrpt.length > 0) {
      let arr = decrpt.split(" ");
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > 3) {
          if(arr[i].slice(arr[i].length-3,arr[i].length)==="erb"){
            arr[i] = arr[i][arr[i].length - 4] + arr[i].slice(0, arr[i].length - 4);
            err= false;
          }
          else{
            arr=["Incorrect message","!!!"];
            err= true;
            break;
          }
        } else {
          if(arr[i].slice(arr[i].length-2,arr[i].length)==="ja"){
            arr[i] = arr[i][0];
            err= false;
          }
          else{
            arr=["Incorrect message","!!!"];
            err= true;
            break;
          }
        }
      }
      arr = arr.join(" ");
      let ele = document.querySelector(".cr");
      if(err){
        ele.classList.add("errorCreated");
      }
      else{
        ele.classList.add("created");
        ele.classList.remove("errorCreated");
      }
      ele.textContent = `${arr}`;
    }
  }
  function submitHandler(event) {
    event.preventDefault();
    setDecrpt("");
  }
  return (
    <>
      <div className="Decrypt">
        <div className="clr1"></div>
        <div className="clr2"></div>
        <div className="contd">
          <div className="logod">
            <img src="logo.png" alt="logo" />
          </div>
          <div className="containerd">
            <div className="topd">
              Welcome to <span>DeCrypt</span>,
            </div>
            <div className="bottomd">
              Restore your data's readability efficiently with our advanced
              decryption solutions.
            </div>
          </div>
        </div>
        <form onSubmit={submitHandler} className="btnsd">
          <textarea
            value={decrpt}
            onChange={changeHandler}
            className="encd"
            placeholder="Write the text you want to Decrypt."
          ></textarea>
          <div className="butd">
            <Link to="/">
              <button className="bkbtn">
                <TiArrowBackOutline value={{ className: "icons" }} />
              </button>
            </Link>
            <button onClick={clickHandler} className="decd">
              Decrypt
            </button>
          </div>
          <div className="cr"></div>
        </form>
      </div>
    </>
  );
};

export default Decrypt;
