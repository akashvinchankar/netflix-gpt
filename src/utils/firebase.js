// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjnufiR7Nm34ncBZ6KtwblBOVD2Kc-CdU",
  authDomain: "netflix-gpt-197de.firebaseapp.com",
  projectId: "netflix-gpt-197de",
  storageBucket: "netflix-gpt-197de.appspot.com",
  messagingSenderId: "148925068430",
  appId: "1:148925068430:web:f67a6411dc407fe45985df",
  measurementId: "G-CEXSPNQKLY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
