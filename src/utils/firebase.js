// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAwvBOFrBuGtLXwUHJfygy2Q7odpmA0xI",
  authDomain: "video-streaming-704e2.firebaseapp.com",
  projectId: "video-streaming-704e2",
  storageBucket: "video-streaming-704e2.appspot.com",
  messagingSenderId: "213471502916",
  appId: "1:213471502916:web:b219041d343c6b508ad211",
  measurementId: "G-X479JQMF1D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);