import { Feather } from '@expo/vector-icons';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { surface, primary, textPrimary } from '../utils/colors';
import DeckListView from '../components/DeckListView';
import NewDeckView from '../components/NewDeckView';

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <Tab.Navigator
            activeColor={primary}
            inactiveColor={textPrimary}
            barStyle={{ backgroundColor: surface }}>
            <Tab.Screen
                options={{
                    tabBarLabel: 'Decks',
                    tabBarIcon: ({ color }) => (
                        <Feather name='home' color={color} size={24} />
                    ),
                }}
                name='decklistview'
                component={DeckListView} />
            <Tab.Screen
                options={{
                    tabBarLabel: 'New Deck',
                    tabBarIcon: ({ color }) => (
                        <Feather name='plus-square' color={color} size={24} />
                    ),
                }}
                name='newdeckview'
                component={NewDeckView} />
        </Tab.Navigator>
    );
}