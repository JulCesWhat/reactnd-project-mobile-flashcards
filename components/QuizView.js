import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Appbar from './Appbar';
import { background, surface, textPrimary, textSecondary, secondary } from '../utils/colors';

export default class QuizView extends React.Component {

    state = {
        quizIndex: 0
    }

    goBack = () => {
        const { id } = this.props.route.params;
        const { navigation } = this.props;
        navigation.push('deckview', {
            id
        });
    };

    render() {
        return (
            <View style={styles.main}>
                <Appbar
                    title={'Quiz'}
                    subtitle={`cards`}
                    onBackPressed={this.goBack} />
                <Text>Quiz View</Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: background,
        padding: 25,
    },
});