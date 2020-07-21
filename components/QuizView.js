import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Appbar from './Appbar';
import { background, surface, textPrimary, textSecondary, secondary } from '../utils/colors';
import Button from './Button';

export default class QuizView extends React.Component {

    state = {
        quizIndex: 0,
        showScore: false,
        score: 0,
        showAnswer: false
    }

    goBack = () => {
        const { id } = this.props.route.params;
        const { navigation } = this.props;
        navigation.push('deckview', {
            id
        });
    };

    restartQuiz = () => {
        this.setState({
            score: 0,
            showScore: false,
            quizIndex: 0,
            showAnswer: false
        });
    };

    showAnswer = () => {
        this.setState({
            showAnswer: true
        });
    }

    submitAnswer = (response, quizIndex) => {
        const { deck } = this.props.route.params;

        const showScore = quizIndex >= deck.questions.length - 1;
        if (response) {
            this.setState((state) => ({
                quizIndex: showScore ? state.quizIndex : state.quizIndex + 1,
                showScore,
                score: state.score + 1,
                showAnswer: false
            }));
        } else {
            this.setState((state) => ({
                quizIndex: showScore ? state.quizIndex : state.quizIndex + 1,
                showScore,
                showAnswer: false
            }));
        }
    }

    render() {
        const { deck } = this.props.route.params;
        const { quizIndex, showScore, score, showAnswer } = this.state;
        const title = deck.questions.length ? `${quizIndex + 1}/${deck.questions.length} cards` : `${quizIndex}/${deck.questions.length} cards`
        return (
            <View style={styles.main}>
                <Appbar
                    title={'Quiz'}
                    subtitle={title}
                    onBackPressed={this.goBack} />
                {
                    deck.questions.length ? (
                        <View>
                            {
                                showScore ? (
                                    <View>
                                        <Text>Your total score is {score} out of {deck.questions.length}</Text>
                                        <Button
                                            onPress={() => this.restartQuiz()}
                                            title='Restart Quiz' />
                                        <Button
                                            onPress={() => this.goBack()}
                                            title='Back to decks'
                                            type='secondary' />
                                    </View>
                                ) : (
                                        <View>
                                            {
                                                showAnswer ? (
                                                    (
                                                        <>
                                                            <Text>{deck.questions[quizIndex].answer}</Text>
                                                            <Button
                                                                onPress={() => this.submitAnswer(true, quizIndex)}
                                                                title='Correct' />
                                                            <Button
                                                                onPress={() => this.submitAnswer(false, quizIndex)}
                                                                title='Incorrect' />
                                                        </>
                                                    )
                                                ) : (
                                                        <>
                                                            <Text>{deck.questions[quizIndex].question}</Text>
                                                            <Button
                                                                onPress={() => this.showAnswer()}
                                                                title='Show Answer' />
                                                        </>
                                                    )
                                            }
                                        </View>
                                    )
                            }
                        </View>
                    ) : (
                            <Text>There are no cards in the current deck</Text>
                        )
                }
            </View>
        );
    }

}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: background,
        padding: 25,
        marginTop: 25
    },
});