import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import Lottie from 'lottie-react-native';
import Onboarding from 'react-native-onboarding-swiper';

import { OnboardingScreenNavigation } from './OnboardingScreenType';

import IMAGES from '@/assets';
import { RouteName } from '@/navigation';
import { setItem } from '@/utils/async-storage';

const { width } = Dimensions.get('window');

const OnboardingScreen = () => {
  const navigation = useNavigation<OnboardingScreenNavigation>();

  const handleDone = () => {
    navigation.navigate(RouteName.Home);
    setItem('onboarded', '1');
  };

  const doneButton = ({ ...props }) => {
    return (
      <TouchableOpacity style={styles.doneButton} {...props}>
        <Text>Done</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View className="flex-1 bg-white">
      <Onboarding
        onDone={handleDone}
        onSkip={handleDone}
        // bottomBarHighlight={false}
        DoneButtonComponent={doneButton}
        containerStyles={{ paddingHorizontal: 15 }}
        pages={[
          {
            backgroundColor: '#a7f3d0',
            image: (
              <View style={styles.lottie}>
                <Lottie source={IMAGES.boostAnimation} autoPlay loop />
              </View>
            ),
            title: 'Boost Productivity',
            subtitle: 'Subscribe this channel to boost your productivity level',
          },
          {
            backgroundColor: '#fef3c7',
            image: (
              <View style={styles.lottie}>
                <Lottie source={IMAGES.workAnimation} autoPlay loop />
              </View>
            ),
            title: 'Work Seamlessly',
            subtitle: 'Get your work done seamlessly without interruption',
          },
          {
            backgroundColor: '#a78bfa',
            image: (
              <View style={styles.lottie}>
                <Lottie source={IMAGES.achieveAnimation} autoPlay loop />
              </View>
            ),
            title: 'Achieve Higher Goals',
            subtitle: 'By boosting your productivity we help you to achieve higher goals',
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  lottie: {
    width: width * 0.9,
    height: width,
  },
  doneButton: {
    padding: 20,
    // backgroundColor: 'white',
    // borderTopLeftRadius: '100%',
    // borderBottomLeftRadius: '100%'
  },
});

export default OnboardingScreen;
