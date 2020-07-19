import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomNav from './BottomNav';
import DeckView from '../components/DeckView';
import QuizView from '../components/QuizView';
import NewQuestionView from '../components/NewQuestionView';

const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='homeview'
                    component={BottomNav}
                    options={{
                        animationEnabled: true,
                        headerShown: false,
                    }} />
                <Stack.Screen
                    name='deckview'
                    component={DeckView}
                    options={{
                        animationEnabled: true,
                        headerShown: false,
                    }} />
                <Stack.Screen
                    name='quizview'
                    component={QuizView}
                    options={{
                        animationEnabled: true,
                        headerShown: false,
                    }} />
                <Stack.Screen
                    name='newquestionview'
                    component={NewQuestionView}
                    options={{
                        animationEnabled: true,
                        headerShown: false,
                    }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;