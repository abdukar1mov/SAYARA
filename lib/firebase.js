import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAm0aqxn-tbIB60tFOguD4AUhTz2_Z2nkY",

    authDomain: "sayara-11fc4.firebaseapp.com",

    projectId: "sayara-11fc4",

    storageBucket: "sayara-11fc4.appspot.com",

    messagingSenderId: "561338073528",

    appId: "1:561338073528:web:df8784b1754777d2424f4d",

    measurementId: "G-Q34VE38QD4"


};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export default firebase;