import initializeAuthentication from "../Firebase/firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuthentication();
const useFirbase = () => {
  const [user, setUser] = useState({});
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  console.log(user);

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
      setUser(result.user);
    });
  };

  const handleUserLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password).then((result) => {
      setUser(result.user);
    });
  };
  const setUserName = (name) => {
    updateProfile(auth.currentUser, { displayName: name }).then((result) => {});
  };
  return {
    user,
    handleGoogleLogIn,
    handleLogOut,
    handleUserRegister,
    handleUserLogin,
    setUserName,
  };
};

export default useFirbase;
