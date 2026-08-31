import React from "react";
import "../global.css";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Box } from "components/ui/box";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
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
    <SafeAreaView className="flex-1 bg-gray-50 dark:bg-gray-900">
      <Box className="flex-1 justify-between items-center px-6 py-16">
        <Box className="items-center mt-12">
          <View className="flex-row items-center mb-2">
            <Text className="text-5xl font-bold text-red-500">CER</Text>
            <Text className="text-5xl font-bold text-green-600">EY</Text>
          </View>
          <Text className="text-gray-600 text-base mt-2 dark:text-gray-400">
            Your Personal Food Assistant
          </Text>
        </Box>

        <Box className="items-center">
          <View className="w-48 h-48 rounded-full bg-white shadow-lg items-center justify-center border-4 border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <Image
              source={require("../images/cerey_tantative_logo.jpeg")}
              className="w-44 h-44 rounded-full"
              resizeMode="cover"
            />
            
          </View>
          <Text className="text-gray-700 text-lg font-semibold mt-6 text-center px-8 dark:text-gray-300">
            Discover personalized recipes tailored to your dietary preferences
          </Text>
        </Box>

        <Box className="w-full items-center mb-8">
          <Box className="w-full max-w-sm">
            <TouchableOpacity
              onPress={() => onSignin()}
              activeOpacity={0.8}
              className="bg-red-500 w-full py-4 rounded-xl shadow-lg mb-4"
            >
              <Text className="text-center text-white font-bold text-lg">
                Sign In
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => router.push("/Signup")}
              activeOpacity={0.8}
              className="bg-green-600 w-full py-4 rounded-xl shadow-lg"
            >
              <Text className="text-center text-white font-bold text-lg">
                Sign Up
              </Text>
            </TouchableOpacity>
          </Box>

          <Box className="mt-8">
            <Text className="text-gray-400 text-sm text-center dark:text-gray-600">
              © 2025 FoodAI. All rights reserved.
            </Text>
          </Box>
        </Box>
      </Box>
    </SafeAreaView>
  );
}