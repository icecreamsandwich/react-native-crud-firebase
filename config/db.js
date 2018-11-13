// db.js

import Firebase from 'firebase';
 let config = {
    apiKey: "AIzaSyBu7u1NXsPTLkjEV4NGRtxGqLt9BcgiQt0",
    authDomain: "",
    databaseURL: "https://react-native-crud-firebase.firebaseio.com/",
    projectId: "react-native-crud-firebase",
    storageBucket: "",
    messagingSenderId: "620823788564"
  };
let app = Firebase.initializeApp(config);
export const db = app.database();
