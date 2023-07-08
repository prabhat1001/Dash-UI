// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQX3Rm9habEVr-jE7RFr42hGbrGZUn1VE",
  authDomain: "dashboard-ui-2d40e.firebaseapp.com",
  projectId: "dashboard-ui-2d40e",
  storageBucket: "dashboard-ui-2d40e.appspot.com",
  messagingSenderId: "391268424323",
  appId: "1:391268424323:web:74fb7f0edb540146fa59b6",
  measurementId: "G-VXQEWWN52E",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage();

const handleAuth = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      alert(error.message);
    });
};

export { auth, provider, storage, handleAuth };
export default db;
