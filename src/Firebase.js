import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: procces.env.REACT_APP_API_KEY,
  authDomain: procces.env.REACT_APP_AUTH_DOMAIN,
  projectId: procces.env.REACT_APP_PROJECT_ID,
  storageBucket: procces.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: procces.env.REACT_APP_MESSANGING,
  appId: procces.env.REACT_APP_APP_ID,
});

export const auth = app.auth();
export default app;
