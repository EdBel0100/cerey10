import React from "react";
import { View, Text, FlatList } from "react-native";
import RecipeCard from "@/components/oui/RecipeCards"; // <-- card component
import { SafeAreaView } from "react-native-safe-area-context";

// Fake data for now, replace with API data later
const favorites = [
  {
    id: "1",
    title: "Spaghetti Carbonara",
    image: "https://picsum.photos/200/200?random=1",
  },
  {
    id: "2",
    title: "Vegan Buddha Bowl",
    image: "https://picsum.photos/200/200?random=2",
  },
  {
    id: "3",
    title: "Grilled Salmon",
    image: "https://picsum.photos/200/200?random=3",
  },
];

export default function Favorites() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 p-4">
        <Text className="text-2xl font-bold mb-4">❤️ Favorite Recipes</Text>

        {favorites.length === 0 ? (
          <Text className="text-lg text-gray-500 text-center mt-8">
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
