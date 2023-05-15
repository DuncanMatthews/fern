import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEZ5vz1zdecD2pVl-uPykzefx-P2VURWY",
  authDomain: "fernhall-esta.firebaseapp.com",
  projectId: "fernhall-esta",
  storageBucket: "fernhall-esta.appspot.com",
  messagingSenderId: "473659291983",
  appId: "1:473659291983:web:32d559ca8ab147cc58ed3a",
  measurementId: "G-WEHBG3LS2Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage, app };

