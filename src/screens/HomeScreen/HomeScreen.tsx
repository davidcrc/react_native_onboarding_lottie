import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import Lottie from 'lottie-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { HomeScreenNavigation } from './HomeScreenType';

import IMAGES from '@/assets';
import { removeItem } from '@/utils/async-storage';

const { width } = Dimensions.get('window');

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigation>();

  const handleReset = async () => {
    await removeItem('onboarded');
    navigation.push('Onboarding');
  };

  return (
    <SafeAreaView className="flex-1 items-center">
      <View style={styles.lottie}>
        <Lottie source={IMAGES.confettyAnimation} autoPlay loop />
      </View>
      <Text style={styles.text}>Home Page</Text>
      <TouchableOpacity onPress={handleReset} style={styles.resetButton}>
        <Text>Reset</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  lottie: {
    width: width * 0.9,
    height: width,
  },
  text: {
    fontSize: width * 0.09,
    marginBottom: 20,
  },
  resetButton: {
    backgroundColor: '#34d399',
    padding: 10,
    borderRadius: 10,
  },
});
