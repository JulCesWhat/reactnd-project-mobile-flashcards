import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Appbar from './Appbar';
import { background, surface, textPrimary, textSecondary, secondary } from '../utils/colors';
import Button from './Button';
import { addCardToDeck } from '../utils/api';

export default class NewQuestionView extends React.Component {

    state = {
        question: '',
        answer: ''
    }

    goBack = () => {
        const { navigation } = this.props;
        const { id } = this.props.route.params;
        navigation.push('deckview', {
            id
        });
    };

    onQuestionChanged = (question) => {
        this.setState({
            question,
        });
    };

    onAnswerChanged = (answer) => {
        this.setState({
            answer,
        });
    };

    createNewQuestion = () => {
        const { id } = this.props.route.params;

        addCardToDeck(id, {
            question: this.state.question,
            answer: this.state.answer
        }).then((res) => {
            this.goBack();
        });
    };

    render() {
        return (
            <View style={styles.main}>
                <Appbar title='New Question' subtitle='' onBackPressed={this.goBack} />
                <TextInput
                    style={styles.inputField}
                    onChangeText={(text) => this.onQuestionChanged(text)}
                    placeholder='Question'
                    value={this.state.question}
                />
                <TextInput
                    style={styles.inputField}
                    onChangeText={(text) => this.onAnswerChanged(text)}
                    placeholder='Answer'
                    value={this.state.answer}
                />
                <Button
                    onPress={this.createNewQuestion}
                    title='Submit'
                    disabled={
                        !this.state.question.length || !this.state.answer.length
                    }
                    type='secondary' />
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
    inputField: {
        backgroundColor: surface,
        padding: 15,
        color: textSecondary,
        borderRadius: 10,
        marginBottom: 20
    }
});