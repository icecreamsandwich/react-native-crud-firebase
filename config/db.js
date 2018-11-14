// db.js

import Firebase from 'firebase';
 let config = {
    apiKey: "fillyourapikeyhere",
    authDomain: "",
    databaseURL: "https://react-native-crud-firebase.firebaseio.com/",
    projectId: "react-native-crud-firebase",
    storageBucket: "",
    messagingSenderId: "senderId"
  };
let app = Firebase.initializeApp(config);
export const db = app.database();
