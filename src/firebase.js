// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.ENV.APIKEY,
    authDomain: process.ENV.AUTHDOMAIN,
    databaseURL: process.ENV.DATABASEURL,
    projectId: process.ENV.PROJECTID,
    storageBucket: process.ENV.STORAGEBUCKET,
    messagingSenderId: process.ENV.MESSAGINGSENDERID,
    appId: process.ENV.APPID,
    measurementId: process.ENV.MEASUREMENTID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;