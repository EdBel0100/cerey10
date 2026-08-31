import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import RecipeCard from "@/components/oui/RecipeCards"; 
import { SafeAreaView } from "react-native-safe-area-context";
import { useGetFavoritesQuery } from "@/redux/services/api";

export default function Favorites() {
  const {data: favorites = []} = useGetFavoritesQuery()

  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-gray-900">
      <View className="flex-1 p-4">
        <Text className="text-2xl text-black font-bold mb-4 dark:text-gray-50">❤️ Favorite Recipes</Text>

        {favorites.length === 0 ? (
          <Text className="text-lg text-black text-center mt-8 dark:text-gray-300">
            No favorites yet. Like some recipes to see them here!
          </Text>
        ) : (
          <FlatList
            data={favorites}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <RecipeCard recipe={item} />}
            contentContainerStyle={{ paddingBottom: 20 }}
          />
        )}
      </View>
    </SafeAreaView>
  );
}
