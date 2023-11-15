import { auth } from "../../../component/auth/FirebaseConfig";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import '../../../assets/css/user.css';

function FirebaseLoginForm() {
    const [userData, setUserData] = useState(null);
  
    function handleGoogleLogin() {
      const provider = new GoogleAuthProvider(); // provider 구글 설정
      signInWithPopup(auth, provider) // 팝업창 띄워서 로그인
        .then((data) => {
          setUserData(data.user); // user data 설정
          console.log(data); // console에 UserCredentialImpl 출력
        })
        .catch((err) => {
          console.log(err);
        });
    }
  
    return (
      <div>
        <div className="tab_item ti2" onClick={handleGoogleLogin}>소셜 로그인</div>
        <div>
          {userData
            ? "당신의 이름은 : " + userData.displayName
            : "로그인 버튼을 눌러주세요 :)"}
        </div>
      </div>
    );
  }
  
  export default FirebaseLoginForm;