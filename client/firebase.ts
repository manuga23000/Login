import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'; // Importa el módulo auth

const firebaseConfig = {
    apiKey: 'AIzaSyBc28Je3YwIDK1twivNcfFAbtJjBww0nbU',
    authDomain: 'login-2aa36.firebaseapp.com',
    projectId: 'login-2aa36',
    storageBucket: 'login-2aa36.appspot.com',
    messagingSenderId: '887408100720',
    appId: '1:887408100720:web:a2f7f844eef351aa56fbb5',
    measurementId: 'G-8FJW67Y9W8',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
