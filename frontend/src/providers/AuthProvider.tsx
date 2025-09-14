"use client";

import { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import { CognitoUserPool } from "amazon-cognito-identity-js";
import Constants from "expo-constants";
const { awsCognitoUserPoolId, awsCognitoClientId } = Constants.expoConfig?.extra || {};

const poolData = {
  UserPoolId: awsCognitoUserPoolId,
  ClientId: awsCognitoClientId,
};

const userPool = new CognitoUserPool(poolData);

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const user = userPool.getCurrentUser();

    if (!user) {
      router.push("/signin");
    } else {
      user.getSession((err: any, session: any) => {
        if (err || !session?.isValid()) {
          router.push("/signin");
        } else {
          setChecking(false);
        }
      });
    }
  }, [router]);

  if (checking) return null;

  return <>{children}</>;
}