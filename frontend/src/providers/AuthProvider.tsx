// providers/AuthProvider.tsx
import React, { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "expo-router";
import { useToken } from "./TokenProvider";

type AuthContextType = {
  isSignedIn: boolean;
  loading: boolean;
};

const AuthContext = createContext<AuthContextType>({
  isSignedIn: false,
  loading: true,
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { getAccessToken } = useToken();
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkTokens = async () => {
      const token = await getAccessToken();
      if (token) {
        setIsSignedIn(true);
        router.replace("/Home");
      } else {
        setIsSignedIn(false);
        router.replace("/Signin");
      }
      setLoading(false);
    };
    checkTokens();
  }, []);

  return (
    <AuthContext.Provider value={{ isSignedIn, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
