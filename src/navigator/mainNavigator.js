import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings79692Navigator from '../features/Settings79692/navigator';
import UserProfile79685Navigator from '../features/UserProfile79685/navigator';
import Settings79684Navigator from '../features/Settings79684/navigator';
import Settings79682Navigator from '../features/Settings79682/navigator';
import SignIn279680Navigator from '../features/SignIn279680/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings79692: { screen: Settings79692Navigator },
UserProfile79685: { screen: UserProfile79685Navigator },
Settings79684: { screen: Settings79684Navigator },
Settings79682: { screen: Settings79682Navigator },
SignIn279680: { screen: SignIn279680Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
