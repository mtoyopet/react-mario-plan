import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCHfGkFrIOcIZ4ecMmRg1m7XZtONjsuQWc",
  authDomain: "mario-plan-efbec.firebaseapp.com",
  projectId: "mario-plan-efbec",
  storageBucket: "mario-plan-efbec.appspot.com",
  messagingSenderId: "811180906983",
  appId: "1:811180906983:web:d18814481dd88691588542"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;