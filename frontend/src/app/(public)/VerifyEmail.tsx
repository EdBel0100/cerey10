import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import Constants from "expo-constants";
import { CognitoUserPool, CognitoUser } from "amazon-cognito-identity-js";

const { awsCognitoUserPoolId, awsCognitoClientId } = Constants.expoConfig?.extra || {};

const poolData = {
  UserPoolId: awsCognitoUserPoolId,
  ClientId: awsCognitoClientId,
};
const userPool = new CognitoUserPool(poolData);

function VerifyEmail() {
  const router = useRouter();
  //const { email } = useLocalSearchParams();
  const email = "edbelwww1@gmail.com" // 👈 passed from Signup
  const [code, setCode] = useState("");

  const handleVerify = () => {
    if (!email || !code) {
      Alert.alert("Error", "Missing email or code");
      return;
    }
    //get email from db

    const user = new CognitoUser({ Username: "edbelwww1@gmail.com" as string, Pool: userPool });

    user.confirmRegistration(code, true, (err, result) => {
      if (err) {
        console.error("Verification error:", err);
        Alert.alert("Verification Error", err.message || "Something went wrong");
        return;
      }

      Alert.alert("Success", "Email verified successfully!");
      router.replace("/Signin"); // 👈 go to Signin
    });
  };

  return (
    <View className="flex-1 items-center justify-center bg-orange-100 px-6">
      <View className="bg-white w-full max-w-md rounded-2xl shadow-xl p-6">
        <View className="items-center mb-6">
          <Text className="text-2xl font-bold text-orange-600">Verify Email</Text>
          <Text className="text-gray-500 text-sm mt-2">
            Enter the code sent to {email}
          </Text>
        </View>

        <View className="flex flex-col gap-4">
          <TextInput
            placeholder="Verification Code"
            className="rounded-xl border border-gray-300 p-3"
            onChangeText={setCode}
            value={code}
            keyboardType="number-pad"
          />

          <TouchableOpacity
            onPress={handleVerify}
            className="w-full rounded-xl bg-orange-500 py-3 mt-2"
          >
            <Text className="text-center text-white font-semibold">Verify</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default VerifyEmail;
