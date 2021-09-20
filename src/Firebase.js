import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: proccess.env.REACT_APP_API_KEY,
  authDomain: proccess.env.REACT_APP_AUTH_DOMAIN,
  projectId: proccess.env.REACT_APP_PROJECT_ID,
  storageBucket: proccess.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: proccess.env.REACT_APP_MESSANGING,
  appId: proccess.env.REACT_APP_APP_ID,
});

export const auth = app.auth();
export default app;
