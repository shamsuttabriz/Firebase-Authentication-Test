// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAe0AaMgRQt-3H2M-x_bgKdDcTYi_PI0U",
  authDomain: "fir-authentication-test-fc993.firebaseapp.com",
  projectId: "fir-authentication-test-fc993",
  storageBucket: "fir-authentication-test-fc993.firebasestorage.app",
  messagingSenderId: "739887933639",
  appId: "1:739887933639:web:6fa5f3953ffe0235f4b6e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
