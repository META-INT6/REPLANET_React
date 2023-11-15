import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCIzDUAW2EzFCF7tFnXjkAd_Vqk7jm32c4",
  authDomain: "replanet-93ab1.firebaseapp.com",
  projectId: "replanet-93ab1",
  storageBucket: "replanet-93ab1.appspot.com",
  messagingSenderId: "639254162704",
  appId: "1:639254162704:web:5487fb8a0b9deedc004995",
  measurementId: "G-W1J94HHVJH"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth };





// export default firebaseConfig;