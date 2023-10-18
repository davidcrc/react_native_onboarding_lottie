import { ParamListBase, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RouteName } from '@/navigation';

type RouteParams = undefined;

interface NavigationParams extends ParamListBase {
  [RouteName.Home]: RouteParams;
}

export type HomeScreenNavigation = NativeStackNavigationProp<NavigationParams>;

export type HomeScreenRoute = RouteProp<NavigationParams, RouteName.Home>;
