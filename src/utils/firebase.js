import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyASl71wseFMnsVSalY1g-5nkYjaL4TaFYA",
  authDomain: "netflix-gpt-432c9.firebaseapp.com",
  projectId: "netflix-gpt-432c9",
  storageBucket: "netflix-gpt-432c9.firebasestorage.app",
  messagingSenderId: "729788351619",
  appId: "1:729788351619:web:d9327492961bca7198c7b6",
  measurementId: "G-KBV1F6QV5J"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)
