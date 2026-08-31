import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import Constants from "expo-constants";
import { CreateUserDto } from "@backend-Dtos/User-Dtos/create-user.dto";
const { awsCognitoUserPoolId, awsCognitoClientId } = Constants.expoConfig?.extra || {};
import {
  CognitoUserPool,
  CognitoUserAttribute,
} from "amazon-cognito-identity-js";
import { useCreateUserMutation } from "@/redux/services/api";

function SignUp() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [createUser] = useCreateUserMutation()

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
      async (result) => {
        const cognitoUserId = result?.userSub;
        console.log("Cognito ID:", cognitoUserId);
        const UserData: CreateUserDto = { cognitoId: cognitoUserId, email: email };

        try {
          await createUser(UserData).unwrap();
        } catch (createUserErr) {
          console.error("Failed to create backend user record:", createUserErr);
        }

        Alert.alert("Almost there", "Check your email for a verification code.");
        router.push({
          pathname: "/VerifyEmail",
          params: { email, password },
        });
      },
      (err) => {
        console.error("Signup error:", err);
        Alert.alert("Signup Error", err.message || "Something went wrong");
      }
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50 dark:bg-gray-900">
      <View className="flex-1 items-center justify-center px-6">
        <View className="bg-white w-full max-w-md rounded-2xl shadow-lg p-8 border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <View className="items-center mb-8">
            <View className="flex-row items-center mb-2">
              <Text className="text-3xl font-bold text-red-500">CER</Text>
              <Text className="text-3xl font-bold text-green-600">EY</Text>
            </View>
            <Text className="text-xl font-bold text-gray-900 mt-2 dark:text-gray-50">Create your account</Text>
            <Text className="text-gray-500 text-sm mt-1 dark:text-gray-400">
              Sign up to explore tasty recipes
            </Text>
          </View>

          <View className="mb-4">
            <Text className="text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">Email</Text>
            <TextInput
              placeholder="Enter your email"
              className="rounded-xl border-2 border-gray-200 p-4 bg-gray-50 text-gray-900 placeholder:text-gray-400 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 dark:placeholder:text-gray-500"
              onChangeText={setEmail}
              value={email}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View className="mb-4">
            <Text className="text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">Password</Text>
            <TextInput
              placeholder="Enter your password"
              secureTextEntry
              className="rounded-xl border-2 border-gray-200 p-4 bg-gray-50 text-gray-900 placeholder:text-gray-400 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 dark:placeholder:text-gray-500"
              onChangeText={setPassword}
              value={password}
            />
          </View>

          <View className="mb-6">
            <Text className="text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">Confirm Password</Text>
            <TextInput
              placeholder="Confirm your password"
              secureTextEntry
              className="rounded-xl border-2 border-gray-200 p-4 bg-gray-50 text-gray-900 placeholder:text-gray-400 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 dark:placeholder:text-gray-500"
              onChangeText={setConfirmPassword}
              value={confirmPassword}
            />
          </View>

          <TouchableOpacity
            onPress={handleSignUp}
            className="w-full rounded-xl bg-green-600 py-4"
          >
            <Text className="text-center text-white font-bold text-lg">Sign Up</Text>
          </TouchableOpacity>

          <View className="items-center mt-6">
            <Text className="text-sm text-gray-600 dark:text-gray-400">Already have an account?</Text>
            <TouchableOpacity onPress={() => router.push("/Signin")}>
              <Text className="text-green-600 font-semibold mt-1 text-base">Sign in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default SignUp;