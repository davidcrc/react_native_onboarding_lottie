import React, { useEffect, useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RouteName } from './route-name';

import { HomeScreen, OnboardingScreen } from '@/screens';
import { getItem } from '@/utils/async-storage';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  const [showOnboarding, setShowOnboarding] = useState<boolean | null>(null);

  const checkIfAlreadyOnboarded = async () => {
    const onboarded = await getItem('onboarded');

    if (Number(onboarded) === 1) {
      // hide onboarding
      setShowOnboarding(false);
    } else {
      // show onboarding
      setShowOnboarding(true);
    }
  };

  useEffect(() => {
    checkIfAlreadyOnboarded();
  }, []);

  if (showOnboarding == null) {
    return null;
  }

  if (showOnboarding) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={RouteName.Onboarding}>
          <Stack.Screen name={RouteName.Onboarding} options={{ headerShown: false }} component={OnboardingScreen} />
          <Stack.Screen name={RouteName.Home} options={{ headerShown: false }} component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={RouteName.Home}>
          <Stack.Screen name={RouteName.Onboarding} options={{ headerShown: false }} component={OnboardingScreen} />
          <Stack.Screen name={RouteName.Home} options={{ headerShown: false }} component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
