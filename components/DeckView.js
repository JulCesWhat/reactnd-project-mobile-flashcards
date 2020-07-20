import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getDeck } from '../utils/api';
import { background } from '../utils/colors';
import Appbar from './Appbar';

export default class DeckView extends React.Component {
    state = {
        deck: {}
    }

    componentDidMount() {
        const { id } = this.props.route.params;
        getDeck(id)
            .then((res) => {
                console.log(res);
                this.setState({
                    deck: res
                });
            });
    }

    goBack = () => {
        const { navigation } = this.props;
        navigation.push('homeview');
    };

    render() {
        const { title, questions } = this.state.deck;
        return (
            <View style={styles.main}>
                <Appbar
                    title={title || 'Deck Title'}
                    subtitle={`${(questions || []).length} cards`}
                    onBackPressed={this.goBack} />
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