import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import AppNavigation from './navigation/Navigation';
import { AppLoading } from 'expo';
import { createLocalNotification } from './utils/notifications';

export default class App extends React.Component {

	componentDidMount() {
		createLocalNotification();
	}

	render() {
		return (
			<View
				style={{
					width: Dimensions.get("window").width,
					height: Dimensions.get("window").height,
				}}>
				<AppNavigation />
			</View>
		);
	}
}