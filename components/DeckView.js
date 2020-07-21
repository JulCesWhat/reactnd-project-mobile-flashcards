import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getDeck } from '../utils/api';
import { background, textPrimary, secondary } from '../utils/colors';
import Appbar from './Appbar';
import QuickActions from './QuickActions';

export default class DeckView extends React.Component {
    state = {
        deck: {},
        id: ''
    }

    componentDidMount() {
        const { id } = this.props.route.params;

        getDeck(id)
            .then((res) => {
                this.setState({
                    deck: res,
                    id
                });
            });
    }

    componentDidUpdate() {
        const { id } = this.props.route.params;
        if (this.state.id !== id) {
            getDeck(id)
                .then((res) => {
                    this.setState({
                        deck: res,
                        id
                    });
                });
        }
    }

    goBack = () => {
        const { navigation } = this.props;
        navigation.push('homeview');
    };

    startQuiz = () => {
        const { navigation } = this.props;
        const { id } = this.props.route.params;
        navigation.navigate('quizview', {
            id
        });
    };

    createCard = () => {
        const { navigation } = this.props;
        const { id } = this.props.route.params;
        navigation.navigate('newquestionview', {
            id
        });
    };

    render() {
        const { title, questions } = this.state.deck;
        return (
            <View style={styles.main}>
                <Appbar
                    title={title || 'Deck Title'}
                    subtitle={`${(questions || []).length} cards`}
                    onBackPressed={this.goBack} />
                <QuickActions
                    title='Add Question Card'
                    iconName='plus-circle'
                    color={secondary}
                    onPressed={this.createCard} />
                <QuickActions
                    title='Start Quiz'
                    iconName='feather'
                    color={textPrimary}
                    onPressed={this.startQuiz} />
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