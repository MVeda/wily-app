import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyAfNYmQUI5lz8hnaWThT2_CyeQq-uf4lbE",
  authDomain: "wily-app-98b67.firebaseapp.com",
  databaseURL: "https://wily-app-98b67.firebaseio.com",
  projectId: "wily-app-98b67",
  storageBucket: "wily-app-98b67.appspot.com",
  messagingSenderId: "129524356797",
  appId: "1:129524356797:web:ee1f3c289a2217c77b49d4"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
