// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqf2QlnhjEREL0io_Rcpb4ybsZGC_-zsA",
  authDomain: "reliance-express-auth.firebaseapp.com",
  projectId: "reliance-express-auth",
  storageBucket: "reliance-express-auth.appspot.com",
  messagingSenderId: "1052116624068",
  appId: "1:1052116624068:web:08c21d5317dbefe5455f91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;