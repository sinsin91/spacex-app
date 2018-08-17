import React from 'react';
import { View } from 'react-native';
import { List, ListItem, Card, Text } from 'react-native-elements';


class SettingScreen extends React.PureComponent {

	render() {

		return (

			<View>

				<View style={{ marginTop:30, alignItems: 'center', justifyContent:'center' }}>
					
					<Text style={{ fontSize: 15 }}  >SpaceX</Text>
					<Text style={{ fontSize: 10 }} >Version 1.0</Text>

				</View>
				
				<List>
						
					<ListItem 
					title="Tip Jar"
					leftIcon={{name: "heart", type:"entypo"}}
					/>

				</List>

			</View>

		)

	}

}

export default (SettingScreen);
