import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthentication = () => {
  const app = initializeApp(firebaseConfig);
};

export default initializeAuthentication;

// This is mysterious world. People live here are even more mysterious. We know nothing what's going on in someone's mind, brain. Even if the person is our nearest one. Maybe our father or mother or any family member, maybe bestfriend. But we know nothing about his idology, nothing about his next plan.
