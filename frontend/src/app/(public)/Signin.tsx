import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { useRouter } from "expo-router";
import Constants from "expo-constants";
import {
  CognitoUserPool,
  CognitoUser,
  AuthenticationDetails,
} from "amazon-cognito-identity-js";

const { awsCognitoUserPoolId, awsCognitoClientId } = Constants.expoConfig?.extra || {};

const poolData = {
  UserPoolId: awsCognitoUserPoolId,
  ClientId: awsCognitoClientId,
};
const userPool = new CognitoUserPool(poolData);

function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    if (!email || !password) {
      Alert.alert("Error", "Please enter both email and password.");
      return;
    }

    const user = new CognitoUser({ Username: email, Pool: userPool });
    const authDetails = new AuthenticationDetails({ Username: email, Password: password });

    user.authenticateUser(authDetails, {
      onSuccess: (result) => {
        console.log("Signed in:", result);
        Alert.alert("Success", "Signed in successfully!");
        router.push("/Home"); // go to app
      },
      onFailure: (err) => {
        console.error("Sign in error:", err);
        Alert.alert("Sign In Error", err.message || "Something went wrong");
      },
      newPasswordRequired: () => {
        Alert.alert("New Password Required", "Please reset your password.");
      },
    });
  };

  return (
    <View className="flex-1 items-center justify-center bg-orange-100 px-6">
      <View className="bg-white w-full max-w-md rounded-2xl shadow-xl p-6">
        <View className="items-center mb-6">
          <Text className="text-2xl font-bold text-orange-600">Welcome back</Text>
          <Text className="text-gray-500 text-sm mt-2">Sign in to continue</Text>
        </View>

        <View className="flex flex-col gap-4">
          <TextInput
            placeholder="Email"
            className="rounded-xl border border-gray-300 p-3"
            onChangeText={setEmail}
            value={email}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            placeholder="Password"
            secureTextEntry
            className="rounded-xl border border-gray-300 p-3"
            onChangeText={setPassword}
            value={password}
          />

          <TouchableOpacity
            onPress={handleSignIn}
            className="w-full rounded-xl bg-orange-500 py-3 mt-2"
          >
            <Text className="text-center text-white font-semibold">Sign In</Text>
          </TouchableOpacity>
        </View>

        <View className="items-center mt-4">
          <Text className="text-sm text-gray-500">Don’t have an account?</Text>
          <TouchableOpacity onPress={() => router.push("/Signup")}>
            <Text className="text-orange-600 font-semibold mt-1">Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default SignIn;
