import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useRouter } from 'expo-router';

export default function ProfilePage() {
  const router = useRouter();

  const [editing, setEditing] = React.useState(false);
  const [name, setName] = React.useState('John Doe');
  const [email, setEmail] = React.useState('john.doe@email.com');

  const handleSave = () => {
    // TODO: call your update user API
    setEditing(false);
  };


  const renderField = (
    icon: string,
    label: string,
    value: string,
    onChange: (v: string) => void,
    keyboardType: any = 'default'
  ) => (
    <View className="bg-white px-6 py-4 border-b border-gray-200">
      <View className="flex-row items-center">
        <View className="w-10 h-10 rounded-full bg-gray-100 items-center justify-center mr-4">
          <MaterialCommunityIcons name={icon} size={22} color="#DC2626" />
        </View>
        <View className="flex-1">
          <Text className="text-xs font-semibold text-gray-500 mb-1">{label}</Text>
          {editing ? (
            <TextInput
              value={value}
              onChangeText={onChange}
              keyboardType={keyboardType}
              className="text-base text-gray-900 p-0"
              autoCapitalize="none"
            />
          ) : (
            <Text className="text-base text-gray-900">{value}</Text>
          )}
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="bg-white px-6 py-4 border-b border-gray-200">
        <View className="flex-row items-center justify-between">
          <TouchableOpacity onPress={() => router.back()}>
            <MaterialCommunityIcons name="arrow-left" size={24} color="#111827" />
          </TouchableOpacity>
          <Text className="text-xl font-bold text-gray-900">Profile</Text>
          <TouchableOpacity onPress={editing ? handleSave : () => setEditing(true)}>
            <Text className="text-base font-semibold text-red-600">
              {editing ? 'Save' : 'Edit'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView className="flex-1">
        {/* Avatar */}
        <View className="items-center py-8 bg-white border-b border-gray-200">
          <View className="w-24 h-24 rounded-full bg-red-100 items-center justify-center mb-3">
            <Text className="text-3xl font-bold text-red-600">
              {name.split(' ').map((n) => n[0]).join('').toUpperCase()}
            </Text>
          </View>
          <Text className="text-lg font-bold text-gray-900">{name}</Text>
          <Text className="text-sm text-gray-500">{email}</Text>
        </View>

        {/* Info Section */}
        <View className="mt-6 mb-2">
          <Text className="px-6 mb-2 text-sm font-semibold text-gray-500">
            Personal Info
          </Text>
          {renderField('email-outline', 'Email', email, setEmail, 'email-address')}
        </View>

        {/* Account Actions */}
        
      
      </ScrollView>
    </SafeAreaView>
  );
}