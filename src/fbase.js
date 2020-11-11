import * as firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
  appId: process.env.REACT_APP_APP_ID,
};

// const firebaseConfig = {
//   apiKey: "AIzaSyCNcdpmXkWnwO1zMlgPOpcYFZppYPysGwc",
//   authDomain: "twitter-clone-20c89.firebaseapp.com",
//   databaseURL: "https://twitter-clone-20c89.firebaseio.com",
//   projectId: "twitter-clone-20c89",
//   storageBucket: "twitter-clone-20c89.appspot.com",
//   messagingSenderId: "1036585246194",
//   appId: "1:1036585246194:web:f710740abd59dbf99ddf6b",
// };
firebase.initializeApp(firebaseConfig);

export const firebaseInstance  = firebase;
export const authService = firebase.auth();
