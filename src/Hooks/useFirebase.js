import initializeAuthentication from "../Firebase/firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuthentication();
const useFirbase = () => {
  const [user, setUser] = useState({});
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleLogIn = () => {
    signInWithPopup(auth, googleProvider).then((result) => {
      setUser(result.user);
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
    return () => unsubscribe;
  }, []);

  const handleLogOut = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };

  const handleUserRegister = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password).then((result) => {
      console.log(result.user);
    });
  };

  const handleUserLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password).then((result) => {
      console.log(result.user);
    });
  };

  return {
    user,
    handleGoogleLogIn,
    handleLogOut,
    handleUserRegister,
    handleUserLogin,
  };
};

export default useFirbase;
