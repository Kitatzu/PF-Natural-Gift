import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDqXcZKzcgjaBnRfhZpikUAtMOSfptfh-Y",
  authDomain: "natural-gift.firebaseapp.com",
  projectId: "natural-gift",
  storageBucket: "natural-gift.appspot.com",
  messagingSenderId: "402024068355",
  appId: "1:402024068355:web:f5b45c8ae385a39818a536",
  measurementId: "G-MWF6KXLP15",
};

export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
console.log(messaging);
const analytics = getAnalytics(app);
