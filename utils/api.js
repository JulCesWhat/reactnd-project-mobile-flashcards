import { AsyncStorage } from 'react-native';

export const MOBILE_FLASHCARDS = 'Mobile:flashcards'

const startingContent = {
    React: {
        title: 'React',
        questions: [
            {
                question: 'What is React?',
                answer: 'A library for managing user interfaces'
            },
            {
                question: 'Where do you make Ajax requests in React?',
                answer: 'The componentDidMount lifecycle event'
            }
        ]
    },
    JavaScript: {
        title: 'JavaScript',
        questions: [
            {
                question: 'What is a closure?',
                answer: 'The combination of a function and the lexical environment within which that function was declared.'
            }
        ]
    }
}

export function getDecks() {
    return AsyncStorage.getItem(MOBILE_FLASHCARDS)
        .then((res) => {
            if (res) {
                return JSON.parse(res);
            } else {
                AsyncStorage.setItem(MOBILE_FLASHCARDS, JSON.stringify(startingContent));
                return startingContent;
            }
        }).catch((err) => {
            console.log('There was an error: ' + err);
        });
}

export function getDeck(id) {
    return AsyncStorage.getItem(MOBILE_FLASHCARDS)
        .then((results) => {
            const data = JSON.parse(results);
            return data[id];
        });
}

export function saveDeckTitle(title) {
    let newTile = title.toLowerCase();
    newTile = newTile.replace(/\s+/g, '')
    return AsyncStorage.mergeItem(MOBILE_FLASHCARDS, JSON.stringify({
        [newTile]: {}
    }));
}

export function addCardToDeck(title, card) {
    let newTile = title.toLowerCase();
    newTile = newTile.replace(/\s+/g, '')
    return AsyncStorage.mergeItem(MOBILE_FLASHCARDS, JSON.stringify({
        [newTile]: card
    }));
}