import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Switch,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useRouter } from "expo-router";
import { useDeleteUserMutation } from "@/redux/services/api";
import { useTheme } from "@Providers/ThemeProvider";
import { useColorScheme } from "nativewind";

export default function SettingsPage() {
  const router = useRouter();

  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);
  const { setThemePreference } = useTheme();
  const { colorScheme } = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  const [deleteAccount] = useDeleteUserMutation();

  const handleLogout = () => {
    Alert.alert("Log Out", "Are you sure you want to log out?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Log Out",
        style: "destructive",
        onPress: () => router.replace("/"),
      },
    ]);
  };

  const handleDeleteAccount = () => {
    Alert.alert(
      "Delete Account",
      "This will permanently delete your account and all your data. This action cannot be undone.",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: async () => {
            try {
              await deleteAccount();
              router.replace("/Signup");
            } catch (err) {
              Alert.alert(
                "Error",
                "Failed to delete account. Please try again."
              );
            }
          },
        },
      ]
    );
  };

  const renderItem = (
    icon: string,
    title: string,
    description: string,
    onPress?: () => void,
    rightContent?: React.ReactNode
  ) => (
    <TouchableOpacity
      onPress={onPress}
      disabled={!onPress}
      className="bg-white px-6 py-4 border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700"
    >
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center flex-1">
          <View className="w-10 h-10 rounded-full bg-gray-100 items-center justify-center mr-4 dark:bg-gray-700">
            <MaterialCommunityIcons name={icon} size={22} color="#DC2626" />
          </View>
          <View className="flex-1">
            <Text className="text-base font-semibold text-gray-900 dark:text-gray-100">
              {title}
            </Text>
            {description ? (
              <Text className="text-sm text-gray-500 dark:text-gray-400">{description}</Text>
            ) : null}
          </View>
        </View>
        {rightContent || (
          <Icon name="chevron-right" size={24} color="#9CA3AF" />
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-50 dark:bg-gray-900">
      <View className="bg-white px-6 py-4 border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <View className="flex-row items-center justify-between">
          <View className="flex-1 ml-4">
            <Text className="text-xl font-bold text-gray-900 dark:text-gray-100">Settings</Text>
            <Text className="text-sm text-gray-500 mt-1 dark:text-gray-400">
              Manage your account and preferences
            </Text>
          </View>
        </View>
      </View>

      <ScrollView className="flex-1">
        <View className="mt-6 mb-2">
          <Text className="px-6 mb-2 text-sm font-semibold text-gray-500 dark:text-gray-400">
            Account
          </Text>
          {renderItem(
            "account-circle",
            "Profile",
            "View and edit your profile",
            () => router.push("/Profile")
          )}
          {renderItem(
            "lock",
            "Change Password",
            "Update your account password",
            () => router.push("/change-password")
          )}
        </View>

        <View className="mt-6 mb-2">
          <Text className="px-6 mb-2 text-sm font-semibold text-gray-500 dark:text-gray-400">
            Preferences
          </Text>
          {renderItem(
            "bell",
            "Notifications",
            "Push and email alerts",
            undefined,
            <Switch
              value={notificationsEnabled}
              onValueChange={setNotificationsEnabled}
            />
          )}
          {renderItem(
            "theme-light-dark",
            "Dark Mode",
            "Toggle app theme",
            undefined,
            <Switch
              value={isDarkMode}
              onValueChange={(value) => setThemePreference(value ? "dark" : "light")}
            />
          )}
          {renderItem(
            "food",
            "Dietary Preferences",
            "Manage dietary needs",
            () => router.push("/Preferences")
          )}
        </View>

        <View className="mt-6 mb-2">
          <Text className="px-6 mb-2 text-sm font-semibold text-gray-500 dark:text-gray-400">
            Privacy & Security
          </Text>
          {renderItem("shield-lock", "Privacy Policy", "", () =>
            router.push("/privacy")
          )}
          {renderItem("file-document", "Terms of Service", "", () =>
            router.push("/terms")
          )}
        </View>

        <View className="mt-6 mb-12">
          <Text className="px-6 mb-2 text-sm font-semibold text-gray-500 dark:text-gray-400">
            Danger Zone
          </Text>
          {renderItem("logout", "Log Out", "", handleLogout)}
          <TouchableOpacity
            onPress={handleDeleteAccount}
            className="bg-white px-6 py-4 dark:bg-gray-800"
          >
            <View className="flex-row items-center">
              <View className="w-10 h-10 rounded-full bg-red-50 items-center justify-center mr-4 dark:bg-red-950">
                <MaterialCommunityIcons
                  name="delete-outline"
                  size={22}
                  color="#DC2626"
                />
              </View>
              <View>
                <Text className="text-base font-semibold text-red-600">
                  Delete Account
                </Text>
                <Text className="text-sm text-gray-500 dark:text-gray-400">
                  Permanently remove your account
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
