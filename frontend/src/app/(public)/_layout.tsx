import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { View, Text } from 'react-native'
import { Slot } from 'expo-router'
import { useRouter } from 'expo-router'
import { usePathname } from 'expo-router'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useColorScheme } from 'nativewind';

const PAGE_TITLES: Record<string, string> = {
    "/preferences": "Dietary Preferences",
    "/Signin": "Sign In",
    "/Signup": "Sign Up",
    "/VerifyEmail": "Verify Email",
    "/profile": "Profile",
    "/settings": "Settings",
  };

function _layout() {
    const router = useRouter();
  const pathname = usePathname();
  const { colorScheme } = useColorScheme();
  const iconColor = colorScheme === "dark" ? "#E5E7EB" : "#1F2937";

  const hideBackButtonPages = ["/", "/Home", "/Discover", "/Landing"];

  const shouldShowBackButton = !hideBackButtonPages.includes(pathname);
  const pageTitle = PAGE_TITLES[pathname];
  return (
<SafeAreaView className="flex-1 bg-gray-50 dark:bg-gray-900">
{shouldShowBackButton && (
  <View className="bg-white px-4 py-3 border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
    <View className="flex-row items-center justify-between">
      <TouchableOpacity
        onPress={() => router.back()}
        className="flex-row items-center z-10"
        activeOpacity={0.7}
      >
        <Icon name="arrow-back" size={24} color={iconColor} />
        <Text className="text-gray-900 font-semibold text-base ml-2 dark:text-gray-100">
          Back
        </Text>
      </TouchableOpacity>
      
      {pageTitle && (
        <Text className="text-gray-900 font-bold text-lg absolute left-0 right-0 text-center z-0 dark:text-gray-100">
          {pageTitle}
        </Text>
      )}
      
      <View className="w-20" />
    </View>
  </View>
)}
<Slot />
</SafeAreaView>
  )}

export default _layout