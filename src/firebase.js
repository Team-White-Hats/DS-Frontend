// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAV-P92x8P_5cgf-m3uO_1orYuyojrY3uY",
  authDomain: "herbal-application.firebaseapp.com",
  projectId: "herbal-application",
  storageBucket: "herbal-application.appspot.com",
  messagingSenderId: "469806213963",
  appId: "1:469806213963:web:ac65f9f4236a3bb6a916ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export default app;