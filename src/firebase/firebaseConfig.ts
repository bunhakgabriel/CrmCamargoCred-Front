import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAgE70Xq47XJIzWoaB6gF7GDU_SOV4In6A",
  authDomain: "consiggestorcrm.firebaseapp.com",
  projectId: "consiggestorcrm",
  storageBucket: "consiggestorcrm.firebasestorage.app",
  messagingSenderId: "1042925589380",
  appId: "1:1042925589380:web:734384068a42d43ef503d1"
};

export const app = initializeApp(firebaseConfig);