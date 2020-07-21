import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Button from './Button';
import { background, surface, textPrimary, textSecondary, secondary } from '../utils/colors';
import { saveDeckTitle } from '../utils/api';

export default class NewDeckView extends React.Component {

    state = {
        title: ''
    }

    onTitleChanged = (title) => {
        this.setState({
            title,
        });
    };

    createNewDeck = () => {
        const { navigation } = this.props;
        const { title } = this.state;
        saveDeckTitle(title)
            .then((res) => {
                navigation.navigate('deckview', { id: title });
            });
    };

    render() {
        return (
            <View style={styles.main}>
                <Text style={styles.title}>New Decks</Text>
                <TextInput
                    style={styles.inputField}
                    onChangeText={(text) => this.onTitleChanged(text)}
                    placeholder='Deck Title'
                    value={this.state.title} />
                <Button
                    onPress={this.createNewDeck}
                    title='Create Deck'
                    disabled={!this.state.title.length}
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
    title: {
        fontSize: 24,
        lineHeight: 36,
        color: textPrimary,
        marginBottom: 20,
    },
    inputField: {
        backgroundColor: surface,
        padding: 15,
        color: textSecondary,
        borderRadius: 10,
        marginBottom: 20
    }
});