import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrXAhPwgpIaRiaNROclKwe1GNXWUQ1kdA",
  authDomain: "mary-s-institute.firebaseapp.com",
  projectId: "mary-s-institute",
  storageBucket: "mary-s-institute.appspot.com",
  messagingSenderId: "1087876007495",
  appId: "1:1087876007495:web:aa60be9f81396b5e3fd362",
  measurementId: "G-P7FSP5DJYR"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const app = createApp(App)

app.use(router)

app.mount('#app')
