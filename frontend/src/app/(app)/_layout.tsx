import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { Slot } from "expo-router";
import { AuthProvider } from "@Providers/AuthProvider";
import { TokenProvider } from "@Providers/TokenProvider";

interface NavItem {
  name: string;
  label: string;
  type: 'FontAwesome' | 'Ionicons' | 'MaterialIcons';
  icon: string;
  iconActive?: string;
  route?: string;
}

export default function BottomNav() {
  const router = useRouter();
  const [active, setActive] = useState("home");

  const navItems: NavItem[] = [
    { name: "home", label: "Home", type: "FontAwesome", icon: "home", route: "/Home" },
    { name: "favorites", label: "Favorites", type: "FontAwesome", icon: "heart", route: "/Favorites" },
    { name: "discover", label: "Discover", type: "Ionicons", icon: "compass-outline", iconActive: "compass-sharp", route: "/Discover" },
    { name: "grocery", label: "Grocery List", type: "MaterialIcons", icon: "fastfood", route: "/grocery" },
    { name: "settings", label: "Settings", type: "Ionicons", icon: "settings-outline", iconActive: "settings-sharp", route: "/Settings" },
  ];

  const renderIcon = (item: NavItem, isActive: boolean) => {
    const color = isActive ? "#FF0000" : "gray";
    const size = isActive ? 26 : 24;
    const iconName = isActive && item.iconActive ? item.iconActive : item.icon;

    const IconComponent = { FontAwesome, Ionicons, MaterialIcons }[item.type];
    return <IconComponent name={iconName as any} size={size} color={color} />;
  };

  const handlePress = (item: NavItem) => {
    setActive(item.name);
    if (item.route) router.push(item.route);
  };

  return (
    <>
      <AuthProvider>


      {/* Slot content wrapper with bottom padding */}
      <View className="flex-1 pb-20">
        <Slot />
      </View>

      {/* Bottom nav */}
      <SafeAreaView
        edges={["bottom"]}
        className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200"
      >
        <View className="flex-row justify-between items-center px-4 py-2">
          {navItems.map((item) => {
            const isActive = active === item.name;
            return (
              <TouchableOpacity
                key={item.name}
                className="flex-1 items-center"
                onPress={() => handlePress(item)}
              >
                {renderIcon(item, isActive)}
                <Text className={`text-xs mt-1 ${isActive ? "text-red-500" : "text-gray-400"}`} numberOfLines={1}>
                  {item.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </SafeAreaView>
      </AuthProvider>
    </>
  );
}
