import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import AppNavigation from './navigation/Navigation';

export default function App() {
	return (
		// <Tab.Navigator>
		// 	<Tab.Screen name="Decks" component={DeckListView} />
		// 	<Tab.Screen name="New Deck" component={NewQuestionView} />
		// </Tab.Navigator>
		<View
		style={{
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").height,
          }}>
			<AppNavigation />
		</View>
	);
}