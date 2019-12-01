import app from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDjoQnSrmrENHXa75utVOEtHj61Hfdf_tI",
    authDomain: "cause-for-care.firebaseapp.com",
    databaseURL: "https://cause-for-care.firebaseio.com",
    projectId: "cause-for-care",
    storageBucket: "cause-for-care.appspot.com",
    messagingSenderId: "381792169058",
    appId: "1:381792169058:web:dc33cc2283325a8625f53b",
    measurementId: "G-GW610MV3LL"
  };

  class Firebase {
      constructor(){
          app.initializeApp(firebaseConfig);
          this. auth = app.auth();
      }

      doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.doCreateUserWithEmailAndPassword(email, password);
      
      doSignInWithEmailAndPassword = (email, password) =>
        this.auth.doSignInWithEmailAndPassword(email, password);
      
      doSighOut = () => this.auth.sighOut();
    }

  export default Firebase;

  