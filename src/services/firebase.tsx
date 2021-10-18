import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAB2g8JSDwLc-UHibYJ0mpoPiXz606K988",
    authDomain: "rolezim-aa598.firebaseapp.com",
    projectId: "rolezim-aa598",
    storageBucket: "rolezim-aa598.appspot.com",
    messagingSenderId: "756077172211",
    appId: "1:756077172211:web:f2dc537776aa49b8fd2e86"
};

firebase.initializeApp(firebaseConfig);

export default firebase;