import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { FontAwesome, MaterialIcons, Ionicons } from "@expo/vector-icons";
import { Slot } from "expo-router";
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter()
  return (
    <View className="flex-1 bg-black">
      {/* Main content scrollable */}
      <ScrollView className="center">
        <Slot/>
      </ScrollView>

      {/* Bottom Bar */}
      <View className="flex-row justify-between items-center bg-black px-6 py-3 shadow-lg">
        <TouchableOpacity className="items-center">
          <FontAwesome name="home" size={28} color="white" />
          <Text className="text-white text-xs mt-1">Home</Text>
        </TouchableOpacity>

        <TouchableOpacity className="items-center">
          <FontAwesome name="heart" size={28} color="white" />
          <Text className="text-white text-xs mt-1">Favorites</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/Discover")} className="items-center -mt-4 bg-orange-500 p-4 rounded-full shadow-lg">
          <Ionicons name="compass" size={36} color="white" />
          <Text className="text-white text-xs mt-1 font-bold">Discover</Text>
        </TouchableOpacity>

        <TouchableOpacity className="items-center">
          <MaterialIcons name="fastfood" size={28} color="white" />
          <Text className="text-white text-xs mt-1">Orders</Text>
        </TouchableOpacity>

        <TouchableOpacity className="items-center">
          <Ionicons name="settings-outline" size={28} color="white" />
          <Text className="text-white text-xs mt-1">Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
