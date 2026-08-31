import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

type Recipe = {
  id: string;
  title: string;
  image: string;
};

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <View className="flex-row items-center bg-gray-100 rounded-2xl p-3 mb-3 shadow-sm dark:bg-gray-800">
      <Image
        source={{ uri: recipe.image }}
        className="w-20 h-20 rounded-xl mr-4"
      />
      <View className="flex-1">
        <Text className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          {recipe.title}
        </Text>
        <TouchableOpacity className="mt-2 flex-row items-center">
          <Icon name="heart" size={18} color="#DC2626" />
          <Text className="text-red-500 ml-2">Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
