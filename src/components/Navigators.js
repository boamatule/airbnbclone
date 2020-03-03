import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Explore from '../screens/Explore';
import Saved from '../screens/Saved';
import Inbox from '../screens/Inbox';
import Trip from '../screens/Trip';
import LoggedOut from "../screens/LoggedOut";
import Login from "../screens/Login";

const TabNavigator = createBottomTabNavigator({
  Explore: {
    screen: Explore,
  },
  Saved: {
    screen: Saved,
  },
  Trip: {
    screen: Trip,
  },
  Inbox: {
    screen: Inbox,
  },
  Profile: {
    screen: Inbox,
  },
  Login: {
    screen: Login
  },
  Logout: {
    screen: LoggedOut
  },
});
export default createAppContainer(TabNavigator);