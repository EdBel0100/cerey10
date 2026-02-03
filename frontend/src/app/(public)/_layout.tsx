import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { View } from 'react-native'
import { Text } from 'react-native-gesture-handler'
import { Slot } from 'expo-router'
import { useRouter } from 'expo-router'
import { usePathname } from 'expo-router'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';

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

  // Pages where back button should NOT appear
  const hideBackButtonPages = ["/", "/Home", "/Discover", "/Landing"];

  const shouldShowBackButton = !hideBackButtonPages.includes(pathname);
  const pageTitle = PAGE_TITLES[pathname];
  return (
<SafeAreaView className="flex-1 bg-gray-50">
{shouldShowBackButton && (
  <View className="bg-white px-4 py-3 border-b border-gray-200">
    <View className="flex-row items-center justify-between">
      <TouchableOpacity
        onPress={() => router.back()}
        className="flex-row items-center z-10"
        activeOpacity={0.7}
      >
        <Icon name="arrow-back" size={24} color="#1F2937" />
        <Text className="text-gray-900 font-semibold text-base ml-2">
          Back
        </Text>
      </TouchableOpacity>
      
      {pageTitle && (
        <Text className="text-gray-900 font-bold text-lg absolute left-0 right-0 text-center z-0">
          {pageTitle}
        </Text>
      )}
      
      {/* Invisible spacer to balance the layout */}
      <View className="w-20" />
    </View>
  </View>
)}
<Slot />
</SafeAreaView>
  )}

export default _layout