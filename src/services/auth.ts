import firebase from 'firebase/app';
import 'firebase/auth';

class AuthController {
  public user: firebase.User;
  constructor() {
    this.init();
  }

  init() {
    const firebaseConfig = {
      apiKey: 'AIzaSyCjV7NH_RuIEfwyMz3PtC_y-tzvQ_LH-IY',
      authDomain: 'ionic-stencil.firebaseapp.com',
      projectId: 'ionic-stencil',
      storageBucket: 'ionic-stencil.appspot.com',
      messagingSenderId: '22831018067',
      appId: '1:22831018067:web:5084d8eef09965ea8716a6',
      measurementId: 'G-B1Q47KC06Y',
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    firebase.auth().onAuthStateChanged(user => {
      this.user = user;
    });
  }

  async loginAnon(): Promise<firebase.auth.UserCredential> {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      return await firebase.auth().signInWithPopup(provider);
    } catch (error) {
      console.log(error);
    }
  }
}

export const AuthService = new AuthController();
