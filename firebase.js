import firebase from "firebase";
import { AppState } from "react-native";

const firebaseConfig = {
    apiKey: "AIzaSyCUoOFwaACAvOmC-e1ruaB08S3G6KIP5po",
    authDomain: "ubereatsclone-328923.firebaseapp.com",
    projectId: "ubereatsclone-328923",
    storageBucket: "ubereatsclone-328923.appspot.com",
    messagingSenderId: "340055614691",
    appId: "1:340055614691:web:66cc6a23ead3c27b2b91d6"
};

!firebase.apps.lenght ? firebase.initializeApp(firebaseConfig) : firebase.app()

export default firebase;