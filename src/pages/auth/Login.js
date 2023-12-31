import React, { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../component/auth/AuthContext";
import '../../assets/css/user.css';
import Swal from "sweetalert2";


import {GoogleLogin} from "@react-oauth/google";
import {GoogleOAuthProvider} from "@react-oauth/google";

const GoogleLoginButton = () => {
    const clientId = 'clientID'
    return (
        <>
            <GoogleOAuthProvider clientId={clientId}>
                <GoogleLogin
                    onSuccess={(res) => {
                        console.log(res);
                    }}
                    onFailure={(err) => {
                        console.log(err);
                    }}
                />
            </GoogleOAuthProvider>
        </>
    );
};

const Login = () => {
    const emailInputRef = useRef(null);
    const passwordInputRef = useRef(null);

    let navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const authCtx = useContext(AuthContext);

    const submitHandler = event => {
        event.preventDefault();

        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        setIsLoading(true);
        authCtx.login(enteredEmail, enteredPassword);
        setIsLoading(false);

        if (authCtx.isSuccess) {
            return(navigate("/", { replace: true }));
        } 
    }




    function toSignup(e) {window.location.href="/signup"};
    function toFind(e) {window.location.href="/find"};

    return (

        <div className="container-first container-centered">
            <h2>로그인이 필요한 서비스입니다.</h2>
            <div id="container-user">
                <div className="items-container ic1">
                    <div className="tabs">
                    <div className="tab_item ti2 active" >일반 로그인</div>
                    <div className="tab_item ti2" onClick={GoogleLoginButton}>소셜 로그인</div>
                    </div>


                    <div className="">
                            
                            <div className="items-container ic1">

                                <input className="input" type="text" id="email" required ref={emailInputRef} placeholder="id" />
                                <input className="input"
                                    type="password"
                                    id="password"
                                    required
                                    ref={passwordInputRef}
                                    placeholder="pw"
                                />
                                
                                <button className="button button-primary" onClick={submitHandler}>로그인</button>
                                {isLoading && <p>Loading</p>}
                                <button className="button button-primary-outline" onClick={toSignup}>회원가입</button>
                            </div>
                            
                        <div className="items-container ic2 pt-2">
                            <a href="./find" className="login-option">아이디 찾기</a>
                            <a href="./find" className="login-option">비밀번호 찾기</a>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}


export default Login;
