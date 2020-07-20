import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { background } from '../utils/colors';
import { getDecks } from '../utils/api';

export default class DeckListView extends React.Component {
    state = {
        decks: {}
    }

    componentDidMount() {
        getDecks()
            .then((res) => {
                this.setState({
                    decks: res
                });
            });
    }

    openDeckView = (id) => {
        const { navigation } = this.props;

        navigation.navigate('deckview', {
          id: id,
        });
    }

    render() {
        const { decks } = this.state;
        return (
            <View style={styles.main}>
                <Text>All Decks</Text>
                {
                    Object.keys(decks).map((id) => (
                        <TouchableOpacity
                            key={id}
                            activeOpacity={0.8}
                            onPress={() => this.openDeckView(id)}>
                            <Text>{decks[id].title}</Text>
                            <Text>{decks[id].questions.length}</Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: background,
        padding: 20,
        marginTop: 25
    },
});