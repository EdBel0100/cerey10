import React from "react";
import { View, Text, Image, SafeAreaView } from "react-native";
import { Box } from "components/ui/box";
import { Button, ButtonText } from "components/ui/button";
import { useRouter } from "expo-router";
import * as SecureStore from "expo-secure-store";

export default function LandingPage() {
  const router = useRouter();

  const onSignin = async () => {
    try {
      router.push("/Home");
    } catch (err) {
      console.error("Error getting access token:", err);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <Box className="flex-1 justify-between items-center px-6 py-16">
        {/* Header Section */}
        <Box className="items-center mt-12">
          <View className="flex-row items-center mb-2">
            <Text className="text-5xl font-bold text-red-500">CER</Text>
            <Text className="text-5xl font-bold text-green-600">EY</Text>
          </View>
          <Text className="text-gray-600 text-base mt-2">
            Your Personal Food Assistant
          </Text>
        </Box>

        {/* Logo Image Section */}
        <Box className="items-center">
          <View className="w-48 h-48 rounded-full bg-white shadow-lg items-center justify-center border-4 border-gray-200">
            <Image
              source={require("../images/cerey_tantative_logo.jpeg")}
              className="w-44 h-44 rounded-full"
              resizeMode="cover"
            />
          </View>
          <Text className="text-gray-700 text-lg font-semibold mt-6 text-center px-8">
            Discover personalized recipes tailored to your dietary preferences
          </Text>
        </Box>

        {/* Buttons Section */}
        <Box className="w-full items-center mb-8">
          <Box className="w-full max-w-sm">
            <Button
              onPress={() => onSignin()}
              className="bg-red-500 w-full py-4 rounded-xl shadow-lg mb-4"
            >
              <ButtonText className="text-white font-bold text-lg">
                Sign In
              </ButtonText>
            </Button>
            <Button
              onPress={() => router.push("/Signup")}
              className="bg-green-600 w-full py-4 rounded-xl shadow-lg"
            >
              <ButtonText className="text-white font-bold text-lg">
                Sign Up
              </ButtonText>
            </Button>
          </Box>

          {/* Footer */}
          <Box className="mt-8">
            <Text className="text-gray-400 text-sm text-center">
              © 2025 FoodAI. All rights reserved.
            </Text>
          </Box>
        </Box>
      </Box>
    </SafeAreaView>
  );
}