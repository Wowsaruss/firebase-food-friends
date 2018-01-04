import firebase from 'firebase'
var config = {
    apiKey: "AIzaSyCbzvHwc0lfZxCctUY3zaCfqI5y89IQtfs",
    authDomain: "fir-food-friends.firebaseapp.com",
    databaseURL: "https://fir-food-friends.firebaseio.com",
    projectId: "fir-food-friends",
    storageBucket: "fir-food-friends.appspot.com",
    messagingSenderId: "204548969181"
  };
firebase.initializeApp(config);
export default firebase;