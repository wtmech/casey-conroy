import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAZqE2dUSgPW0WUbhowF2TCvuOJ5cWhyy8",
  authDomain: "casey-conroy.firebaseapp.com",
  databaseURL: "https://casey-conroy.firebaseio.com",
  projectId: "casey-conroy",
  storageBucket: "casey-conroy.appspot.com",
  messagingSenderId: "951851752833"
};
firebase.initializeApp(config);

export default firebase;