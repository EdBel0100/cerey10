import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import Constants from "expo-constants";
import { CognitoUserPool, CognitoUser } from "amazon-cognito-identity-js";
import { useSignInMutation } from "@/redux/services/api";
import { useToken } from "@Providers/TokenProvider";

const { awsCognitoUserPoolId, awsCognitoClientId } = Constants.expoConfig?.extra || {};

const poolData = {
  UserPoolId: awsCognitoUserPoolId,
  ClientId: awsCognitoClientId,
};
const userPool = new CognitoUserPool(poolData);

function VerifyEmail() {
  const router = useRouter();
  const { email, password } = useLocalSearchParams<{ email: string; password: string }>();
  const [code, setCode] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [signInRequest] = useSignInMutation();
  const auth = useToken();

  const handleResend = () => {
    if (!email) {
      Alert.alert("Error", "Missing email - go back and sign up again.");
      return;
    }

    const user = new CognitoUser({ Username: email, Pool: userPool });

    setIsResending(true);
    user.resendConfirmationCode((err) => {
      setIsResending(false);
      if (err) {
        console.error("Resend code error:", err);
        Alert.alert("Couldn't resend code", err.message || "Something went wrong");
        return;
      }
      Alert.alert("Code sent", "Check your email (and spam folder) for the new code.");
    });
  };

  const handleVerify = () => {
    if (!email || !code) {
      Alert.alert("Error", "Missing email or code");
      return;
    }

    const user = new CognitoUser({ Username: email, Pool: userPool });

    setIsVerifying(true);

    user.confirmRegistration(code, true, async (err, result) => {
      if (err) {
        setIsVerifying(false);
        console.error("Verification error:", err);
        Alert.alert("Verification Error", err.message || "Something went wrong");
        return;
      }

      if (!password) {
        setIsVerifying(false);
        Alert.alert("Success", "Email verified! Please sign in.");
        router.replace("/Signin");
        return;
      }

      try {
        const signInResult = await signInRequest({ email, password }).unwrap();

        if (signInResult.success) {
          await auth.signInFromCredentials(
            signInResult.tokens.accessToken,
            signInResult.tokens.idToken,
            signInResult.tokens.refreshToken,
            signInResult.user.username
          );
          router.replace("/Home");
        } else {
          router.replace("/Signin");
        }
      } catch (signInErr) {
        console.error("Auto sign-in after verification failed:", signInErr);
        Alert.alert("Verified", "Your email is verified. Please sign in.");
        router.replace("/Signin");
      } finally {
        setIsVerifying(false);
      }
    });
  };

  return (
    <View className="flex-1 items-center justify-center bg-orange-100 px-6 dark:bg-gray-900">
      <View className="bg-white w-full max-w-md rounded-2xl shadow-xl p-6 dark:bg-gray-800">
        <View className="items-center mb-6">
          <Text className="text-2xl font-bold text-orange-600">Verify Email</Text>
          <Text className="text-gray-500 text-sm mt-2 text-center dark:text-gray-400">
            Enter the code sent to {email}. Don't see it? Check your spam
            folder - it can take a few minutes to arrive.
          </Text>
        </View>

        <View className="flex flex-col gap-4">
          <TextInput
            placeholder="Verification Code"
            className="rounded-xl border border-gray-300 p-3 text-gray-900 placeholder:text-gray-400 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 dark:placeholder:text-gray-500"
            onChangeText={setCode}
            value={code}
            keyboardType="number-pad"
          />

          <TouchableOpacity
            onPress={handleVerify}
            disabled={isVerifying}
            className={`w-full rounded-xl py-3 mt-2 ${isVerifying ? "bg-orange-300" : "bg-orange-500"}`}
          >
            <Text className="text-center text-white font-semibold">
              {isVerifying ? "Verifying..." : "Verify"}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleResend} disabled={isResending} className="py-2">
            <Text className="text-center text-orange-600 font-medium text-sm">
              {isResending ? "Sending..." : "Resend code"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default VerifyEmail;
