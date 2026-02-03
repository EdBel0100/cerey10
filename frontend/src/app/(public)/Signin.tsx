import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, SafeAreaView } from "react-native";
import { useRouter } from "expo-router";
import { useSignInMutation } from "@/redux/services/api";
import * as SecureStore from "expo-secure-store";
import { useToken } from "@Providers/TokenProvider";

function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInRequest, { isLoading }] = useSignInMutation();
  const auth = useToken();

  const handleSignIn = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please enter both email and password.");
      return;
    }

    try {
      const result = await signInRequest({ email, password }).unwrap();
      console.log(result);

      if (result.success) {
        await auth.signInFromCredentials(
          result.tokens.accessToken,
          result.tokens.idToken,
          result.tokens.refreshToken,
          result.user.username
        );
        await SecureStore.setItemAsync("accessToken", result.tokens.accessToken);
        await SecureStore.setItemAsync("idToken", result.tokens.idToken);
        await SecureStore.setItemAsync("refreshToken", result.tokens.refreshToken);

        router.push("/Home");
      }
    } catch (error: any) {
      console.error("Sign in error:", error);
      Alert.alert("Sign In Error", error?.data?.message || "Something went wrong");
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <View className="flex-1 items-center justify-center px-6">
        <View className="bg-white w-full max-w-md rounded-2xl shadow-lg p-8 border border-gray-200">
          <View className="items-center mb-8">
            <View className="flex-row items-center mb-2">
              <Text className="text-3xl font-bold text-red-500">CER</Text>
              <Text className="text-3xl font-bold text-green-600">EY</Text>
            </View>
            <Text className="text-xl font-bold text-gray-900 mt-2">Welcome back</Text>
            <Text className="text-gray-500 text-sm mt-1">Sign in to continue</Text>
          </View>

          <View className="mb-4">
            <Text className="text-sm font-medium text-gray-700 mb-2">Email</Text>
            <TextInput
              placeholder="Enter your email"
              className="rounded-xl border-2 border-gray-200 p-4 bg-gray-50"
              onChangeText={setEmail}
              value={email}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View className="mb-6">
            <Text className="text-sm font-medium text-gray-700 mb-2">Password</Text>
            <TextInput
              placeholder="Enter your password"
              secureTextEntry
              className="rounded-xl border-2 border-gray-200 p-4 bg-gray-50"
              onChangeText={setPassword}
              value={password}
            />
          </View>

          <TouchableOpacity
            onPress={handleSignIn}
            className={`w-full rounded-xl py-4 ${
              isLoading ? "bg-red-300" : "bg-red-500"
            }`}
            disabled={isLoading}
          >
            <Text className="text-center text-white font-bold text-lg">
              {isLoading ? "Signing In..." : "Sign In"}
            </Text>
          </TouchableOpacity>

          <View className="items-center mt-6">
            <Text className="text-sm text-gray-600">Don't have an account?</Text>
            <TouchableOpacity onPress={() => router.push("/Signup")}>
              <Text className="text-red-500 font-semibold mt-1 text-base">Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default SignIn;