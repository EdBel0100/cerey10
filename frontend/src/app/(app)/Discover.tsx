import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
  interpolate,
  runOnJS,
} from 'react-native-reanimated';
import { usePostOpenAiMutation } from "@Redux/services/api";
import { useRouter } from "expo-router";

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const SWIPE_THRESHOLD = screenWidth * 0.25;

const RecipeSwipeCard = () => {
  const router = useRouter();
  const [postOpenAi, { isLoading }] = usePostOpenAiMutation();
  const [currentRecipe, setCurrentRecipe] = useState<any>(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const [isRefetching, setIsRefetching] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const scale = useSharedValue(1);

  const fetchNewRecipe = async () => {
    try {
      setIsRefetching(true);
      setErrorMessage(null);

      const response = await postOpenAi({
        description: "generate a beef stew with onions"
      }).unwrap();

      setCurrentRecipe(response);

      translateX.value = 0;
      translateY.value = 0;
      scale.value = 1;

    } catch (error: any) {
      console.error('Error fetching recipe:', error);
      setErrorMessage(
        error?.data?.message || "Couldn't generate a recipe. Please try again."
      );
    } finally {
      setIsRefetching(false);
    }
  };

  React.useEffect(() => {
    if (!isInitialized) {
      fetchNewRecipe();
      setIsInitialized(true);
    }
  }, [isInitialized]);

  const animateCardAway = (direction: number) => {
    'worklet';
    translateX.value = withTiming(direction * screenWidth * 1.5, { duration: 300 });
    scale.value = withTiming(0.8, { duration: 300 });
    runOnJS(fetchNewRecipe)();
  };

  const panGesture = Gesture.Pan()
    .onStart(() => {
      scale.value = withSpring(1.05);
    })
    .onUpdate((event) => {
      translateX.value = event.translationX;
      translateY.value = event.translationY;
    })
    .onEnd((event) => {
      const shouldSwipe = 
        Math.abs(event.translationX) > SWIPE_THRESHOLD || 
        Math.abs(event.velocityX) > 500;
      
      if (shouldSwipe) {
        const direction = event.translationX > 0 ? 1 : -1;
        animateCardAway(direction);
      } else {
        translateX.value = withSpring(0);
        translateY.value = withSpring(0);
        scale.value = withSpring(1);
      }
    });

  const handleLike = () => {
    translateX.value = withTiming(screenWidth * 1.5, { duration: 300 });
    scale.value = withTiming(0.8, { duration: 300 });
    setTimeout(fetchNewRecipe, 300);
    
  };

  const handleDislike = () => {
    translateX.value = withTiming(-screenWidth * 1.5, { duration: 300 });
    scale.value = withTiming(0.8, { duration: 300 });
    setTimeout(fetchNewRecipe, 300);
  };

  const cardAnimatedStyle = useAnimatedStyle(() => {
    const rotation = interpolate(
      translateX.value,
      [-screenWidth, 0, screenWidth],
      [-30, 0, 30]
    );

    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
        { rotate: `${rotation}deg` },
        { scale: scale.value },
      ] as any,
    };
  });

  const likeIndicatorStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      translateX.value,
      [0, SWIPE_THRESHOLD],
      [0, 1],
      'clamp'
    );

    return { opacity };
  });

  const dislikeIndicatorStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      translateX.value,
      [-SWIPE_THRESHOLD, 0],
      [1, 0],
      'clamp'
    );

    return { opacity };
  });

  if (isLoading && !currentRecipe) {
    return (
      <GestureHandlerRootView className="flex-1">
        <View className="flex-1 bg-gray-50 dark:bg-gray-900 justify-center items-center">
          <View className="items-center space-y-4">
            <ActivityIndicator size="large" color="#10b981" />
            <Text className="text-lg text-gray-600 dark:text-gray-400 font-medium">
              Loading delicious recipe...
            </Text>
          </View>
        </View>
      </GestureHandlerRootView>
    );
  }

  if (errorMessage) {
    return (
      <GestureHandlerRootView className="flex-1">
        <View className="flex-1 bg-gray-50 dark:bg-gray-900 justify-center items-center px-8">
          <Text className="text-lg text-gray-800 dark:text-gray-100 font-semibold text-center">
            {errorMessage}
          </Text>
          <View className="flex-row mt-6" style={{ gap: 12 }}>
            <TouchableOpacity
              onPress={fetchNewRecipe}
              className="bg-green-600 px-5 py-3 rounded-xl"
            >
              <Text className="text-white font-semibold">Try again</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => router.push("/Preferences")}
              className="bg-gray-200 px-5 py-3 rounded-xl dark:bg-gray-700"
            >
              <Text className="text-gray-800 dark:text-gray-100 font-semibold">Set preferences</Text>
            </TouchableOpacity>
          </View>
        </View>
      </GestureHandlerRootView>
    );
  }

  if (!currentRecipe) {
    return (
      <GestureHandlerRootView className="flex-1">
        <View className="flex-1 bg-gray-50 dark:bg-gray-900 justify-center items-center">
          <Text className="text-lg text-gray-600 dark:text-gray-400 font-medium">
            No recipe available
          </Text>
        </View>
      </GestureHandlerRootView>
    );
  }

  return (
    <GestureHandlerRootView className="flex-1">
      <View className="flex-1 bg-gray-50 dark:bg-gray-900 pt-12 pb-24">
        {isRefetching && (
          <View 
            className="absolute inset-0 bg-gray-50/90 dark:bg-gray-900/90 justify-center items-center z-50"
          >
            <View className="bg-white rounded-2xl p-6 items-center shadow-lg dark:bg-gray-800">
              <ActivityIndicator size="large" color="#10b981" />
              <Text className="text-lg text-gray-600 font-medium mt-4 dark:text-gray-400">
                Finding your next recipe...
              </Text>
            </View>
          </View>
        )}

        <View className="flex-1 justify-center items-center">
          <GestureDetector gesture={panGesture}>
            <Animated.View style={cardAnimatedStyle}>
              <View 
                className="bg-white rounded-3xl shadow-xl mx-5 overflow-hidden dark:bg-gray-800"
                style={{ 
                  width: screenWidth - 40, 
                  height: screenHeight * 0.7,
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 4 },
                  shadowOpacity: 0.15,
                  shadowRadius: 12,
                  elevation: 8,
                }}
              >
                <Image 
                  source={{ uri: currentRecipe.image }}
                  className="w-full"
                  style={{ height: screenHeight * 0.3 }}
                  resizeMode="cover"
                />
                
                <ScrollView 
                  className="flex-1 p-5" 
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={{ paddingBottom: 20 }}
                >
                  <Text className="text-2xl font-bold text-gray-900 mb-1 dark:text-gray-100">
                    {currentRecipe.title}
                  </Text>

                  {!!currentRecipe.description && (
                    <Text className="text-sm text-gray-500 italic mb-5 leading-5 dark:text-gray-400">
                      {currentRecipe.description}
                    </Text>
                  )}

                  {!!currentRecipe.ingredients?.length && (
                    <View className="mb-5">
                      <Text className="text-base font-bold text-gray-900 mb-2 dark:text-gray-100">
                        Ingredients
                      </Text>
                      {currentRecipe.ingredients.map((ingredient: string, index: number) => (
                        <View key={index} className="flex-row mb-1.5 pr-2">
                          <Text className="text-base text-green-600 mr-2">
                            {"\u2022"}
                          </Text>
                          <Text className="flex-1 text-base leading-6 text-gray-800 dark:text-gray-300">
                            {ingredient}
                          </Text>
                        </View>
                      ))}
                    </View>
                  )}

                  {!!currentRecipe.steps?.length && (
                    <View>
                      <Text className="text-base font-bold text-gray-900 mb-2 dark:text-gray-100">
                        Directions
                      </Text>
                      {currentRecipe.steps.map((step: string, index: number) => (
                        <View key={index} className="flex-row mb-3 pr-2">
                          <View className="w-6 h-6 rounded-full bg-green-100 justify-center items-center mr-2 mt-0.5 dark:bg-green-900">
                            <Text className="text-xs font-bold text-green-700 dark:text-green-300">
                              {index + 1}
                            </Text>
                          </View>
                          <Text className="flex-1 text-base leading-6 text-gray-800 dark:text-gray-300">
                            {step}
                          </Text>
                        </View>
                      ))}
                    </View>
                  )}
                </ScrollView>
                
                <Animated.View
                  style={[
                    {
                      position: 'absolute',
                      top: 50,
                      right: 20,
                      transform: [{ rotate: '15deg' }],
                      backgroundColor: '#10b981',
                      paddingHorizontal: 20,
                      paddingVertical: 12,
                      borderRadius: 12,
                    },
                    likeIndicatorStyle,
                  ]}
                >
                  <Text 
                    style={{
                      color: 'white',
                      fontSize: 24,
                      fontWeight: 'bold',
                    }}
                  >
                    LIKE
                  </Text>
                </Animated.View>
                
                <Animated.View
                  style={[
                    {
                      position: 'absolute',
                      top: 50,
                      left: 20,
                      transform: [{ rotate: '-15deg' }],
                      backgroundColor: '#ef4444',
                      paddingHorizontal: 20,
                      paddingVertical: 12,
                      borderRadius: 12,
                    },
                    dislikeIndicatorStyle,
                  ]}
                >
                  <Text 
                    style={{
                      color: 'white',
                      fontSize: 24,
                      fontWeight: 'bold',
                    }}
                  >
                    NOPE
                  </Text>
                </Animated.View>
              </View>
            </Animated.View>
          </GestureDetector>
          
          <View className="flex-row justify-center items-center mt-8 space-x-16">
            <TouchableOpacity 
              onPress={handleDislike}
              disabled={isRefetching}
              className={`w-16 h-16 rounded-full justify-center items-center shadow-lg ${
                isRefetching ? 'bg-gray-400' : 'bg-red-500 active:scale-95'
              }`}
              style={{
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.25,
                shadowRadius: 4,
                elevation: 5,
              }}
            >
              <Text className="text-white text-2xl font-bold">✕</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              onPress={handleLike}
              disabled={isRefetching}
              className={`w-16 h-16 rounded-full justify-center items-center shadow-lg ${
                isRefetching ? 'bg-gray-400' : 'bg-green-500 active:scale-95'
              }`}
              style={{
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.25,
                shadowRadius: 4,
                elevation: 5,
              }}
            >
              <Text className="text-white text-2xl font-bold">♥</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </GestureHandlerRootView>
  );
};

export default RecipeSwipeCard;