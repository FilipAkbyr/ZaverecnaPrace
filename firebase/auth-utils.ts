import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
  } from 'firebase/auth';
  import { firebase_app } from './config';
  
  
  const auth = getAuth(firebase_app);
  
  export const authUtils = {
    login: async (email: string, password: string) => {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        console.log("User logged in");
        const isLoggedIn = true;
        return true;
    } catch (error : any) {
        switch (error.code) {
            case "auth/invalid-email":
                alert("Špatně zadaný email.");
                break;
            case "auth/wrong-password":
                alert("Nesprávné heslo.");
                break;
            case "auth/network-request-failed":
                alert("Chyba v síti. Prosím zkuste to znovu později.");
                break;
            default:
            alert(error.message);
        }
        return false;
    }
    },
    logout: async () => {
      await auth.signOut();
    },
    register: async (email: string, password: string) => {
      await createUserWithEmailAndPassword(auth, email, password);
    },
    getCurrentUser: () => auth.currentUser,
  };

  
  