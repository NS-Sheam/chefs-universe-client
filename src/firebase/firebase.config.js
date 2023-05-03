// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// console.log("environment", import.meta.env.VITE_PASS);
const firebaseConfig = {
  apiKey: "AIzaSyC2-8tiJm3iF5GnWeJs_qYd_i3mz6KLTSI",
  authDomain: "chef-recipe-hunting-client.firebaseapp.com",
  projectId: "chef-recipe-hunting-client",
  storageBucket: "chef-recipe-hunting-client.appspot.com",
  messagingSenderId: "571217903131",
  appId: "1:571217903131:web:1f308a0c3196ce4c1742be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;