import { ParamListBase, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RouteName } from '@/navigation';

type RouteParams = undefined;

interface NavigationParams extends ParamListBase {
  [RouteName.Onboarding]: RouteParams;
}

export type OnboardingScreenNavigation = NativeStackNavigationProp<NavigationParams>;

export type OnboardingScreenRoute = RouteProp<NavigationParams, RouteName.Onboarding>;
