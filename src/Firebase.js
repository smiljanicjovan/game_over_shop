import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCDuZkN-WHP-PvWlYRtIzVLaY8g4OMGvdU",
  authDomain: "gameover-8319f.firebaseapp.com",
  projectId: "gameover-8319f",
  storageBucket: "gameover-8319f.appspot.com",
  messagingSenderId: "460575926520",
  appId: "1:460575926520:web:d367caea21986e0f47b30d",
});

export const auth = app.auth();
export default app;
