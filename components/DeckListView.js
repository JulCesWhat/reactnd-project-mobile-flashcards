import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { background, surface, textPrimary, textSecondary, secondary } from '../utils/colors';
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
        navigation.navigate('deckview', { id });
    }

    render() {
        const { decks } = this.state;
        return (
            <View style={styles.main}>
                <Text style={styles.title}>All Decks</Text>
                {
                    Object.keys(decks).map((id) => (
                        <TouchableOpacity
                            key={id}
                            activeOpacity={0.8}
                            onPress={() => this.openDeckView(id)}>
                            <View style={styles.deckItem}>
                                <View style={styles.deckInfo}>
                                    <Text style={styles.deckCards}>{`${decks[id].questions.length} cards`}</Text>
                                    <Text style={styles.deckTitle}>{decks[id].title}</Text>
                                </View>
                            </View>
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
    title: {
        fontSize: 24,
        lineHeight: 36,
        color: textPrimary,
        marginBottom: 20,
    },
    deckItem: {
        backgroundColor: surface,
        padding: 15,
        marginBottom: 10,
        marginTop: 10,
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    deckInfo: {
        display: 'flex',
        flexDirection: 'column',
    },
    deckTitle: {
        fontSize: 18,
        color: textSecondary,
    },
    deckCards: {
        fontSize: 12,
        textTransform: 'uppercase',
        letterSpacing: 5,
        color: secondary,
    }
});