import React, { useState, useRef, useContext } from "react";
import '../../../assets/css/user.css';
import FirebaseLoginForm from "./FirebaseLoginForm";

function FirebaseLogin() {

    return (<div className="tab_item ti2" onClick={FirebaseLoginForm}>소셜 로그인</div>)  }
  


export default FirebaseLogin;
