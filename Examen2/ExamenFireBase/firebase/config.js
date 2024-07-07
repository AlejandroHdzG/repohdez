import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDIiPGDDmg-i-6qoWXDuz88EYz6nRtVxjo",
  authDomain: "reactfirebase-53cdf.firebaseapp.com",
  projectId: "reactfirebase-53cdf",
  storageBucket: "reactfirebase-53cdf.appspot.com",
  messagingSenderId: "995057819928",
  appId: "1:995057819928:web:e27cf93cff8520526f3e6d",
  measurementId: "G-G8ENCTJXQ2"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 
const auth = getAuth(app); 

export { app, analytics, auth };
