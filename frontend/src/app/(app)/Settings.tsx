import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Switch,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useRouter } from "expo-router";
import { useDeleteUserMutation } from "@/redux/services/api";

export default function SettingsPage() {
  const router = useRouter();

  // Example local state
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);
  const [darkMode, setDarkMode] = React.useState(false);
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
      className="bg-white px-6 py-4 border-b border-gray-200"
    >
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center flex-1">
          <View className="w-10 h-10 rounded-full bg-gray-100 items-center justify-center mr-4">
            <MaterialCommunityIcons name={icon} size={22} color="#DC2626" />
          </View>
          <View className="flex-1">
            <Text className="text-base font-semibold text-gray-900">
              {title}
            </Text>
            {description ? (
              <Text className="text-sm text-gray-500">{description}</Text>
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
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="bg-white px-6 py-4 border-b border-gray-200">
        <View className="flex-row items-center justify-between">
          <View className="flex-1 ml-4">
            <Text className="text-xl font-bold text-gray-900">Settings</Text>
            <Text className="text-sm text-gray-500 mt-1">
              Manage your account and preferences
            </Text>
          </View>
        </View>
      </View>

      {/* Content */}
      <ScrollView className="flex-1">
        {/* Account Section */}
        <View className="mt-6 mb-2">
          <Text className="px-6 mb-2 text-sm font-semibold text-gray-500">
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

        {/* Preferences Section */}
        <View className="mt-6 mb-2">
          <Text className="px-6 mb-2 text-sm font-semibold text-gray-500">
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
            <Switch value={darkMode} onValueChange={setDarkMode} />
          )}
          {renderItem(
            "food",
            "Dietary Preferences",
            "Manage dietary needs",
            () => router.push("/Preferences")
          )}
        </View>

        {/* Privacy Section */}
        <View className="mt-6 mb-2">
          <Text className="px-6 mb-2 text-sm font-semibold text-gray-500">
            Privacy & Security
          </Text>
          {renderItem("shield-lock", "Privacy Policy", "", () =>
            router.push("/privacy")
          )}
          {renderItem("file-document", "Terms of Service", "", () =>
            router.push("/terms")
          )}
        </View>

        {/* Danger Zone */}
        <View className="mt-6 mb-12">
          <Text className="px-6 mb-2 text-sm font-semibold text-gray-500">
            Danger Zone
          </Text>
          {renderItem("logout", "Log Out", "", handleLogout)}
          <TouchableOpacity
            onPress={handleDeleteAccount}
            className="bg-white px-6 py-4"
          >
            <View className="flex-row items-center">
              <View className="w-10 h-10 rounded-full bg-red-50 items-center justify-center mr-4">
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
                <Text className="text-sm text-gray-500">
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
