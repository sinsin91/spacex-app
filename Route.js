import React from 'react';
// import { SimpleLineIcons, Ionicons, FontAwesome, Entypo } from '@expo/vector-icons';
import { Icon } from 'react-native-elements'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

//Live
import LiveScreen from './screens/live/LiveScreen';

//Roadster
import RoadsterScreen from './screens/RoadsterScreen';

//Settings
import SettingScreen from './screens/settings/SettingScreen';

const LiveStack = createStackNavigator(
	{

		Home: {

			screen: LiveScreen,
			navigationOptions: {

				title: "New Launch"

			}
		}

	}
);

const RoadsterStack = createStackNavigator(
	{

		Home: {

			screen: RoadsterScreen,
			navigationOptions: {

				title: "Roadster"

			}
		}

	}
);


const SettingStack = createStackNavigator(
	{

		Home: {

			screen: SettingScreen,

		}

	}
);

const Root = createBottomTabNavigator(

	{
		Live: { 
			screen: LiveStack,

			navigationOptions: {

				tabBarIcon: <Icon name='flag' type='entypo' />,
				title: "New Launch"
			},

		},

		Roadster: {

			screen: RoadsterStack,

			navigationOptions: {
				tabBarIcon: <Icon name='space-shuttle' type='font-awesome' />,
				title: "Roadster"
			},
		},

		Setting: { 
			screen: SettingStack,

			navigationOptions: {
				tabBarIcon: <Icon name='ios-settings' type='ionicon' />,
				title: "Settings"
			},

		}
	},
	{

		initialRouteName: 'Live',

	}


);

export default Root;
