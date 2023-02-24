import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBhSYqHWfm-t1o2Hx5wLdlFed6GNQKYjSo",
  authDomain: "beefy-boulders-93d6a.firebaseapp.com",
  projectId: "beefy-boulders-93d6a",
  storageBucket: "beefy-boulders-93d6a.appspot.com",
  messagingSenderId: "1088639276699",
  appId: "1:1088639276699:web:ac3160110a188cf86fd83e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)