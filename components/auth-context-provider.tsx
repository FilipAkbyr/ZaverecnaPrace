import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import React, {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from 'react';

import { firebase_app } from '../firebase/config';

const auth = getAuth(firebase_app);
type AuthContextType = { user?: User; loading?: boolean };
export const AuthContext = createContext<AuthContextType>({});
export const useAuthContext = () => useContext(AuthContext);
export const AuthContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = React.useState<User>();
  const [loading, setLoading] = useState(true);
  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authenticatedUser) => {
      if (authenticatedUser) {
        setUser(authenticatedUser);
      } else {
        setUser(undefined);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);
  return (
    <AuthContext.Provider value={{ user, loading }}>
      {loading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  );
};