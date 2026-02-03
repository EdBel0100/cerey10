// providers/TokenProvider.tsx
import React, { createContext, useContext } from "react";
import * as SecureStore from "expo-secure-store";
import { jwtDecode } from "jwt-decode";

type DecodedJwt = { exp: number };

type TokenContextType = {
getAccessToken: () => Promise<string | null>;
  signInFromCredentials: (
    accessToken: string,
    idToken: string,
    refreshToken: string,
    username: string
  ) => Promise<void>;
  signOut: () => Promise<void>;
};

const TokenContext = createContext<TokenContextType>({
  getAccessToken: async () => null,
  signInFromCredentials: async () => {},
  signOut: async () => {},
});

export const TokenProvider = ({ children }: { children: React.ReactNode }) => {
  //const [refresh] = useRefreshMutation();

  // Check if token is valid
  const isTokenValid = (token: string) => {
    try {
      const decoded: DecodedJwt = jwtDecode<DecodedJwt>(token);
      return decoded.exp > Date.now() / 1000;
    } catch {
      return false;
    }
  };

  // Refresh
//   const refreshAccessToken = async (username: string, refreshToken: string) => {
//     try {
//       const result = await refresh({ username, refreshToken }).unwrap();
//       console.log(result)
//       await SecureStore.setItemAsync("accessToken", result.tokens.accessToken);
//       await SecureStore.setItemAsync("idToken", result.tokens.idToken);
//       if (result.tokens.refreshToken) {
//         await SecureStore.setItemAsync("refreshToken", result.tokens.refreshToken);
//       }
//       return result.tokens.accessToken;
//     } catch (err) {
//       console.error("Error refreshing access token:", err);
//       return null;
//     }
//   };

  // Get access token
  const getAccessToken = async () => {
    const accessToken = await SecureStore.getItemAsync("accessToken");
    if (accessToken && isTokenValid(accessToken)) return accessToken;

    const refreshToken = await SecureStore.getItemAsync("refreshToken");
    const username = await SecureStore.getItemAsync("username");
    if (!refreshToken || !username) return null;

  };

  // Save tokens on login
  const signInFromCredentials = async (
    accessToken: string,
    idToken: string,
    refreshToken: string,
    username: string
  ) => {
    await SecureStore.setItemAsync("accessToken", accessToken);
    await SecureStore.setItemAsync("idToken", idToken);
    await SecureStore.setItemAsync("refreshToken", refreshToken);
    await SecureStore.setItemAsync("username", username);
  };

  // Clear tokens
  const signOut = async () => {
    await SecureStore.deleteItemAsync("accessToken");
    await SecureStore.deleteItemAsync("idToken");
    await SecureStore.deleteItemAsync("refreshToken");
    await SecureStore.deleteItemAsync("username");
  };

  return (
    <TokenContext.Provider
      value={{getAccessToken, signInFromCredentials, signOut }}
    >
      {children}
    </TokenContext.Provider>
  );
};

export const useToken = () => useContext(TokenContext);
