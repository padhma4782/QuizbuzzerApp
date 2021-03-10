import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJBUZ_ZfrCHFqNTRbuUocNKXaE7JCnoec",
  authDomain: "wirelessbuzzer-a9f48.firebaseapp.com",
  databaseURL: "https://wirelessbuzzer-a9f48-default-rtdb.firebaseio.com",
  projectId: "wirelessbuzzer-a9f48",
  storageBucket: "wirelessbuzzer-a9f48.appspot.com",
  messagingSenderId: "367721833466",
  appId: "1:367721833466:web:ff6b3183485b9043ca7a43",
  measurementId: "G-NVQP49RC4P"
};

firebase.initializeApp(firebaseConfig);

export default firebase.database();