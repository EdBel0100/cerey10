import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Alert,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useRouter } from 'expo-router';
import {
  useUpdatePreferencesMutation,
  useGetPreferencesQuery,
} from '@Redux/services/api'; // <-- RTK Query hooks

interface DietaryOption {
  id: string;
  title: string;
  description: string;
  icon: string;
  iconFamily: 'MaterialIcons' | 'FontAwesome' | 'MaterialCommunityIcons';
  color: string;
}

interface DietaryCategory {
  title: string;
  description: string;
  options: DietaryOption[];
}

// ✅ only include fields from Prisma schema
const preferenceKeys = [
  "vegetarianOnly",
  "vegan",
  "pescatarian",
  "flexitarian",
  "meatOnly",
  "glutenFree",
  "lactoseFree",
  "dairyFree",
  "nutFree",
  "peanutFree",
  "shellfishFree",
  "eggFree",
  "soyFree",
  "fishFree",
  "nightshadeFree",
  "lowCarb",
  "keto",
  "paleo",
  "lowSugar",
  "lowSalt",
  "lowFat",
  "highProtein",
  "rawFood",
  "whole30",
  "diabeticFriendly",
];

export default function Home() {
  const router = useRouter();
  const userCognitoId = "user-12345"; // TODO: replace with real auth context

  // RTK Query hooks
  const { data: preferences, isLoading, refetch } = useGetPreferencesQuery(userCognitoId);
  const [updatePreferences] = useUpdatePreferencesMutation();

  // local state
  const [selectedPreferences, setSelectedPreferences] = useState<string[]>([]);
  const [customPreferences, setCustomPreferences] = useState<string>('');

  // sync fetched preferences into state
  useEffect(() => {
    if (preferences) {
      // check all true fields
      const activePrefs = preferenceKeys.filter((key) => preferences[key]);
      setSelectedPreferences(activePrefs);

      // load custom preferences if present
      if (preferences.customPreferences) {
        setCustomPreferences(preferences.customPreferences);
      }
    }
  }, [preferences]);

  // categories (same as before)
  const dietaryCategories: DietaryCategory[] = [
    {
      title: 'General Diets',
      description: 'Basic dietary preferences and eating patterns',
      options: [
        { id: 'vegetarianOnly', title: 'Vegetarian Only', description: 'No meat, but includes dairy and eggs', icon: 'eco', iconFamily: 'MaterialIcons', color: '#22C55E' },
        { id: 'vegan', title: 'Vegan', description: 'No animal products whatsoever', icon: 'leaf', iconFamily: 'MaterialCommunityIcons', color: '#16A34A' },
        { id: 'pescatarian', title: 'Pescatarian', description: 'Vegetarian diet that includes fish', icon: 'fish', iconFamily: 'MaterialCommunityIcons', color: '#0EA5E9' },
        { id: 'flexitarian', title: 'Flexitarian', description: 'Mostly vegetarian with occasional meat', icon: 'restaurant', iconFamily: 'MaterialIcons', color: '#84CC16' },
        { id: 'meatOnly', title: 'Meat Only', description: 'Carnivorous diet, primarily meat-based', icon: 'food-steak', iconFamily: 'MaterialCommunityIcons', color: '#DC2626' }
      ]
    },
    {
      title: 'Allergies & Intolerances',
      description: 'Foods to avoid due to allergies or intolerances',
      options: [
        { id: 'glutenFree', title: 'Gluten-Free', description: 'No wheat, barley, rye, or other gluten', icon: 'grain', iconFamily: 'MaterialCommunityIcons', color: '#F59E0B' },
        { id: 'lactoseFree', title: 'Lactose-Free', description: 'No lactose-containing dairy products', icon: 'cup', iconFamily: 'MaterialCommunityIcons', color: '#06B6D4' },
        { id: 'dairyFree', title: 'Dairy-Free', description: 'No milk, cheese, or dairy products', icon: 'cow', iconFamily: 'MaterialCommunityIcons', color: '#0891B2' },
        { id: 'nutFree', title: 'Nut-Free', description: 'No tree nuts or nut products', icon: 'warning', iconFamily: 'MaterialIcons', color: '#EA580C' },
        { id: 'peanutFree', title: 'Peanut-Free', description: 'No peanuts or peanut products', icon: 'warning', iconFamily: 'MaterialIcons', color: '#DC2626' },
        { id: 'shellfishFree', title: 'Shellfish-Free', description: 'No shellfish or crustaceans', icon: 'warning', iconFamily: 'MaterialIcons', color: '#B91C1C' },
        { id: 'eggFree', title: 'Egg-Free', description: 'No eggs or egg products', icon: 'egg', iconFamily: 'MaterialCommunityIcons', color: '#F97316' },
        { id: 'soyFree', title: 'Soy-Free', description: 'No soy products or derivatives', icon: 'soy-sauce', iconFamily: 'MaterialCommunityIcons', color: '#A3A3A3' },
        { id: 'fishFree', title: 'Fish-Free', description: 'No fish or seafood', icon: 'fish', iconFamily: 'MaterialCommunityIcons', color: '#0284C7' },
        { id: 'nightshadeFree', title: 'Nightshade-Free', description: 'No tomatoes, potatoes, peppers, eggplant', icon: 'food-variant', iconFamily: 'MaterialCommunityIcons', color: '#7C2D12' }
      ]
    },
    {
      title: 'Health & Lifestyle Diets',
      description: 'Specialized diets for health and fitness goals',
      options: [
        { id: 'lowCarb', title: 'Low Carb', description: 'Reduced carbohydrate intake', icon: 'trending-down', iconFamily: 'MaterialIcons', color: '#8B5CF6' },
        { id: 'keto', title: 'Keto', description: 'Very low carb, high fat diet', icon: 'flash', iconFamily: 'MaterialIcons', color: '#7C3AED' },
        { id: 'paleo', title: 'Paleo', description: 'Whole foods, no processed items', icon: 'fire', iconFamily: 'MaterialIcons', color: '#EA580C' },
        { id: 'lowSugar', title: 'Low Sugar', description: 'Minimal added sugars and sweeteners', icon: 'candy-off', iconFamily: 'MaterialCommunityIcons', color: '#EC4899' },
        { id: 'lowSalt', title: 'Low Salt', description: 'Reduced sodium intake', icon: 'heart', iconFamily: 'MaterialIcons', color: '#DC2626' },
        { id: 'lowFat', title: 'Low Fat', description: 'Reduced fat content in foods', icon: 'trending-down', iconFamily: 'MaterialIcons', color: '#10B981' },
        { id: 'highProtein', title: 'High Protein', description: 'Increased protein intake for fitness', icon: 'fitness-center', iconFamily: 'MaterialIcons', color: '#7C2D12' },
        { id: 'rawFood', title: 'Raw Food', description: 'Uncooked, unprocessed plant foods', icon: 'spa', iconFamily: 'MaterialIcons', color: '#16A34A' },
        { id: 'whole30', title: 'Whole30', description: '30-day elimination diet program', icon: 'calendar', iconFamily: 'MaterialIcons', color: '#F59E0B' },
        { id: 'diabeticFriendly', title: 'Diabetic Friendly', description: 'Low sugar and controlled carbs', icon: 'medical-bag', iconFamily: 'MaterialCommunityIcons', color: '#0891B2' }
      ]
    }
  ];

  const togglePreference = (id: string) => {
    setSelectedPreferences(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const handleSave = async () => {
    try {
      const body: Record<string, any> = {};
      preferenceKeys.forEach((key) => {
        body[key] = selectedPreferences.includes(key);
      });
      body.customPreferences = customPreferences;

      await updatePreferences({ userCognitoId, body }).unwrap();
      refetch()

      Alert.alert("Success", "Your preferences have been saved.", [
        { text: "OK", onPress: () => router.back() },
      ]);
    } catch (err) {
      console.error(err);
      Alert.alert("Error", "Failed to save preferences.");
    }
  };

  const renderIcon = (option: DietaryOption) => {
    const IconComponent = {
      MaterialIcons: Icon,
      FontAwesome: FontAwesome,
      MaterialCommunityIcons: MaterialCommunityIcons,
    }[option.iconFamily];

    return <IconComponent name={option.icon} size={24} color={option.color} />;
  };

  const renderOption = (option: DietaryOption) => {
    const isSelected = selectedPreferences.includes(option.id);

    return (
      <TouchableOpacity
        key={option.id}
        onPress={() => togglePreference(option.id)}
        className="mb-3"
      >
        <View
          className={`p-4 rounded-xl border-2 ${
            isSelected ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-white'
          }`}
        >
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center flex-1">
              <View
                className="w-12 h-12 rounded-full items-center justify-center mr-4"
                style={{ backgroundColor: option.color + '20' }}
              >
                {renderIcon(option)}
              </View>
              <View className="flex-1">
                <Text
                  className="text-lg font-semibold mb-1"
                  style={{ color: isSelected ? '#DC2626' : '#1F2937' }}
                >
                  {option.title}
                </Text>
                <Text
                  className="text-sm"
                  style={{ color: isSelected ? '#991B1B' : '#6B7280' }}
                >
                  {option.description}
                </Text>
              </View>
            </View>
            <View
              className={`w-6 h-6 rounded-full border-2 items-center justify-center ${
                isSelected ? 'border-red-500 bg-red-500' : 'border-gray-300'
              }`}
            >
              {isSelected && <Icon name="check" size={16} color="white" />}
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const renderCategory = (category: DietaryCategory) => (
    <View key={category.title} className="mb-8">
      <View className="mb-4">
        <Text className="text-lg font-bold text-gray-900 mb-1">{category.title}</Text>
        <Text className="text-sm text-gray-600">{category.description}</Text>
      </View>
      {category.options.map(renderOption)}
    </View>
  );

  if (isLoading) {
    return (
      <SafeAreaView className="flex-1 items-center justify-center bg-gray-50">
        <Text className="text-gray-600">Loading preferences...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="bg-white px-6 py-4 border-b border-gray-200">
        <View className="flex-row items-center justify-between">
          <TouchableOpacity onPress={() => router.back()}>
            <Icon name="arrow-back" size={24} color="#374151" />
          </TouchableOpacity>
          <View className="flex-1 ml-4">
            <Text className="text-xl font-bold text-gray-900">Dietary Preferences</Text>
            <Text className="text-sm text-gray-500 mt-1">
              Select your dietary needs and lifestyle choices
            </Text>
          </View>
        </View>
      </View>

      <ScrollView className="flex-1 px-6 py-6">
        {dietaryCategories.map(renderCategory)}

        {/* Custom Preferences Section */}
        <View className="mb-8">
          <Text className="text-lg font-bold text-gray-900 mb-4">Custom Preferences</Text>
          <Text className="text-sm text-gray-600 mb-3">
            Add any specific dietary needs or preferences not listed above
          </Text>
          <TextInput
            value={customPreferences}
            onChangeText={setCustomPreferences}
            placeholder="e.g., No artificial sweeteners, Mediterranean diet, specific allergies..."
            multiline
            numberOfLines={4}
            className="bg-white border-2 border-gray-200 rounded-xl p-4 text-base"
            style={{
              borderColor: '#E5E7EB',
              backgroundColor: '#FFFFFF',
              textAlignVertical: 'top',
            }}
          />
        </View>
      </ScrollView>

      {/* Save Button */}
      {/* Save Button */}
<View className="bg-white border-t border-gray-200 px-6 py-6">
  <View className="space-y-3">
    <TouchableOpacity
      onPress={handleSave}
      className="bg-red-500 py-4 rounded-xl items-center"
    >
      <Text className="text-white text-lg font-semibold">Save Preferences</Text>
    </TouchableOpacity>

    <TouchableOpacity
      onPress={() => router.back()}
      className="py-4 items-center"
    >
      <Text className="text-gray-500 text-lg">Skip for now</Text>
    </TouchableOpacity>
  </View>
</View>

    </SafeAreaView>
  );
}
