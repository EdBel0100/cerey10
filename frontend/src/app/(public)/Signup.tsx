import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { useRouter } from "expo-router";
import Constants from "expo-constants";
const { awsCognitoUserPoolId, awsCognitoClientId } = Constants.expoConfig?.extra || {};
import {
  CognitoUserPool,
  CognitoUserAttribute,
} from "amazon-cognito-identity-js";


function SignUp() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const poolData = {
    UserPoolId: awsCognitoUserPoolId,
    ClientId: awsCognitoClientId,
  };
  const userPool = new CognitoUserPool(poolData);

  const signUpUser = (
    email: string,
    password: string,
    confirmPassword: string,
    onSuccess: (result: any) => void,
    onError: (err: any) => void
  ) => {
    if (password !== confirmPassword) {
      onError(new Error("Passwords do not match"));
      return;
    }

    const attributeList: CognitoUserAttribute[] = [
      new CognitoUserAttribute({ Name: "email", Value: email }),
    ];

    userPool.signUp(email, password, attributeList, [], (err, result) => {
      if (err) {
        onError(err);
        return;
      }
      onSuccess(result);
    });
  };

  const handleSignUp = () => {
    signUpUser(
      email,
      password,
      confirmPassword,
      (result) => {
        // Cognito user created successfully
        const cognitoUserId = result?.userSub;
        console.log("Cognito ID:", cognitoUserId);

        // TODO: Send cognitoUserId + email to your backend to create DB entry
        // await fetch("/api/tenant", { method: "POST", body: JSON.stringify({ cognitoId: cognitoUserId, email }) });

        Alert.alert("Success", "Account created successfully!");
        router.push("/VerifyEmail"); // Navigate to sign in page
      },
      (err) => {
        console.error("Signup error:", err);
        Alert.alert("Signup Error", err.message || "Something went wrong");
      }
    );
  };

  return (
    <View className="flex-1 items-center justify-center bg-orange-100 px-6">
      <View className="bg-white w-full max-w-md rounded-2xl shadow-xl p-6">
        <View className="items-center mb-6">
          <Text className="text-2xl font-bold text-orange-600">
            Create your account
          </Text>
          <Text className="text-gray-500 text-sm mt-2">
            Sign up to explore tasty recipes
          </Text>
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
          <TextInput
            placeholder="Confirm Password"
            secureTextEntry
            className="rounded-xl border border-gray-300 p-3"
            onChangeText={setConfirmPassword}
            value={confirmPassword}
          />

          <TouchableOpacity
            onPress={handleSignUp}
            className="w-full rounded-xl bg-orange-500 py-3 mt-2"
          >
            <Text className="text-center text-white font-semibold">Sign Up</Text>
          </TouchableOpacity>
        </View>

        <View className="items-center mt-4">
          <Text className="text-sm text-gray-500">Already have an account?</Text>
          <TouchableOpacity onPress={() => router.push("/Signin")}>
            <Text className="text-orange-600 font-semibold mt-1">Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default SignUp;
