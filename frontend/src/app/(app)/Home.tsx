import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useRouter } from 'expo-router';
import { useGetPreferencesQuery } from '@Redux/services/api'; 
 
interface QuickAction {
  id: string;
  title: string;
  icon: string;
  iconFamily: 'MaterialIcons' | 'FontAwesome' | 'MaterialCommunityIcons';
  color: string;
  route: string;
}
 
interface FeaturedItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  tag?: string;
}
 
const preferenceKeys = [
  'vegetarianOnly',
  'vegan',
  'pescatarian',
  'flexitarian',
  'meatOnly',
  'glutenFree',
  'lactoseFree',
  'dairyFree',
  'nutFree',
  'peanutFree',
  'shellfishFree',
  'eggFree',
  'soyFree',
  'fishFree',
  'nightshadeFree',
  'lowCarb',
  'keto',
  'paleo',
  'lowSugar',
  'lowSalt',
  'lowFat',
  'highProtein',
  'rawFood',
  'whole30',
  'diabeticFriendly',
];
 
const FEATURED_ITEMS: FeaturedItem[] = [
  {
    id: '1',
    title: 'Weekly Picks',
    subtitle: 'Curated for your preferences',
    image: 'https://placehold.co/300x200',
    tag: 'New',
  },
  {
    id: '2',
    title: 'Trending Nearby',
    subtitle: 'Popular with people like you',
    image: 'https://placehold.co/300x200',
  },
  {
    id: '3',
    title: 'Quick & Easy',
    subtitle: 'Ready in 20 minutes or less',
    image: 'https://placehold.co/300x200',
  },
];
 
export default function HomeScreen() {
  const router = useRouter(); 
 
  const { data: preferences, isLoading } = useGetPreferencesQuery();
 
  const activePreferenceCount = preferences
    ? preferenceKeys.filter((key) => preferences[key]).length
    : 0;
 
  const quickActions: QuickAction[] = [
    {
      id: 'discover',
      title: 'Discover',
      icon: 'explore',
      iconFamily: 'MaterialIcons',
      color: '#DC2626',
      route: '/Discover',
    },
    {
      id: 'preferences',
      title: 'Preferences',
      icon: 'tune',
      iconFamily: 'MaterialIcons',
      color: '#7C3AED',
      route: '/Preferences',
    },
    {
      id: 'saved',
      title: 'Saved',
      icon: 'bookmark',
      iconFamily: 'MaterialIcons',
      color: '#0891B2',
      route: '/Saved',
    },
    {
      id: 'profile',
      title: 'Profile',
      icon: 'person',
      iconFamily: 'MaterialIcons',
      color: '#16A34A',
      route: '/Profile',
    },
  ];
 
  const renderQuickActionIcon = (action: QuickAction) => {
    const IconComponent = {
      MaterialIcons: Icon,
      FontAwesome: FontAwesome,
      MaterialCommunityIcons: MaterialCommunityIcons,
    }[action.iconFamily];
 
    return <IconComponent name={action.icon} size={22} color={action.color} />;
  };
 
  const renderQuickAction = (action: QuickAction) => (
    <TouchableOpacity
      key={action.id}
      onPress={() => router.push(action.route)}
      className="items-center flex-1"
    >
      <View
        className="w-14 h-14 rounded-2xl items-center justify-center mb-2"
        style={{ backgroundColor: action.color + '20' }}
      >
        {renderQuickActionIcon(action)}
      </View>
      <Text className="text-xs font-medium text-gray-700 dark:text-gray-300">{action.title}</Text>
    </TouchableOpacity>
  );
 
  const renderFeaturedCard = (item: FeaturedItem) => (
    <TouchableOpacity
      key={item.id}
      className="mr-4 rounded-xl overflow-hidden bg-white border-2 border-gray-200 dark:bg-gray-800 dark:border-gray-700"
      style={{ width: 220 }}
      onPress={() => router.push('/Discover')}
    >
      <View className="relative">
        <Image
          source={{ uri: item.image }}
          style={{ width: '100%', height: 130 }}
          resizeMode="cover"
        />
        {item.tag && (
          <View className="absolute top-2 left-2 bg-red-500 px-2 py-1 rounded-full">
            <Text className="text-white text-xs font-semibold">{item.tag}</Text>
          </View>
        )}
      </View>
      <View className="p-3">
        <Text className="text-base font-semibold text-gray-900 mb-1 dark:text-gray-100">{item.title}</Text>
        <Text className="text-sm text-gray-500 dark:text-gray-400">{item.subtitle}</Text>
      </View>
    </TouchableOpacity>
  );
 
  return (
    <SafeAreaView className="flex-1 bg-gray-50 dark:bg-gray-900">
      <View className="bg-white px-6 py-4 border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <View className="flex-row items-center justify-between">
          <View className="flex-1">
            <Text className="text-xl font-bold text-gray-900 dark:text-gray-100">Good morning 👋</Text>
            <Text className="text-sm text-gray-500 mt-1 dark:text-gray-400">
              Here's what's fresh for you today
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => router.push('/Profile')}
            className="w-11 h-11 rounded-full bg-red-50 items-center justify-center dark:bg-red-950"
          >
            <Icon name="person" size={22} color="#DC2626" />
          </TouchableOpacity>
        </View>
      </View>
 
      <ScrollView className="flex-1 px-6 py-6" showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          onPress={() => router.push('/Discover')}
          className="flex-row items-center bg-white border-2 border-gray-200 rounded-xl px-4 py-3 mb-6 dark:bg-gray-800 dark:border-gray-700"
        >
          <Icon name="search" size={20} color="#9CA3AF" />
          <Text className="ml-3 text-base text-gray-400 dark:text-gray-500">Search recipes, restaurants...</Text>
        </TouchableOpacity>
 
        <View className="flex-row justify-between mb-8">
          {quickActions.map(renderQuickAction)}
        </View>
 
        <TouchableOpacity
          onPress={() => router.push('/Preferences')}
          className="p-4 rounded-xl border-2 border-gray-200 bg-white mb-8 dark:bg-gray-800 dark:border-gray-700"
        >
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center flex-1">
              <View className="w-12 h-12 rounded-full items-center justify-center mr-4 bg-red-50 dark:bg-red-950">
                <MaterialCommunityIcons name="tune-variant" size={24} color="#DC2626" />
              </View>
              <View className="flex-1">
                <Text className="text-base font-semibold text-gray-900 mb-1 dark:text-gray-100">
                  Dietary Preferences
                </Text>
                <Text className="text-sm text-gray-500 dark:text-gray-400">
                  {isLoading
                    ? 'Loading...'
                    : activePreferenceCount > 0
                    ? `${activePreferenceCount} preference${
                        activePreferenceCount === 1 ? '' : 's'
                      } active`
                    : 'Tap to set your preferences'}
                </Text>
              </View>
            </View>
            <Icon name="chevron-right" size={24} color="#9CA3AF" />
          </View>
        </TouchableOpacity>
 
        <View className="mb-8">
          <View className="flex-row items-center justify-between mb-4">
            <Text className="text-lg font-bold text-gray-900 dark:text-gray-100">Recommended for You</Text>
            <TouchableOpacity onPress={() => router.push('/Discover')}>
              <Text className="text-sm font-medium text-red-500">See all</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 24 }}
          >
            {FEATURED_ITEMS.map(renderFeaturedCard)}
          </ScrollView>
        </View>
 
        {!isLoading && activePreferenceCount === 0 && (
          <View className="p-4 rounded-xl bg-red-50 border-2 border-red-100 mb-8 dark:bg-red-950 dark:border-red-900">
            <Text className="text-sm text-red-700 dark:text-red-300">
              Set your dietary preferences to get personalized recommendations.
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}