import React from "react";
import { View, Text, Image } from "react-native";
import { Box } from "components/ui/box";
import { Button } from "components/ui/button";
import { useRouter } from "expo-router";

export default function LandingPage() {
  
  const router = useRouter();

  return (
    <Box className="flex-1 bg-black justify-between items-center py-16">
      {/* Logo Text */}
      <Box className="items-center">
        <View className="flex-row space-x-1">
          <Text className="text-6xl font-bold text-orange-500">CER</Text>
          <Text className="text-6xl font-bold text-green-700">EY</Text>
        </View>
      </Box>

      {/* Logo Image */}
      <Box className="items-center">
        <Image
          source={require("../images/cerey_tantative_logo.jpeg")}
          className="w-40 h-40 rounded-full"
          resizeMode="contain"
        />
      </Box>

      {/* Sign In / Sign Up Buttons */}
      <Box className="flex-row justify-center mb-10">
        <Button
          onPress={() => router.push("/Signin")}
          className="bg-orange-500 px-10 py-5 rounded-full shadow-lg flex items-center justify-center min-w-[130px] min-h-[60px] mr-6"
        >
          <Text className="text-white font-bold text-xl text-center">
            Sign In
          </Text>
        </Button>
        <Button
          onPress={() => router.push("/Signup")}
          className="bg-green-700 px-10 py-5 rounded-full shadow-lg flex items-center justify-center min-w-[130px] min-h-[60px] ml-6"
        >
          <Text className="text-white font-bold text-xl text-center">
            Sign Up
          </Text>
        </Button>
      </Box>

      {/* Skip Button */}
      <Button
        onPress={() => router.push("/Home")}
        className="bg-gray-700 px-10 py-5 rounded-full shadow-lg flex items-center justify-center min-w-[130px] min-h-[60px]"
      >
        <Text className="text-white font-bold text-xl text-center">Skip</Text>
      </Button>

      {/* Footer */}
      <Box className="mb-4">
        <Text className="text-gray-500 text-center">
          © 2025 FoodAI. All rights reserved.
        </Text>
      </Box>
    </Box>
  );
}
