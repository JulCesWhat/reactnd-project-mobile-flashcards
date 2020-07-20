import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { textSecondary, textPrimary } from '../utils/colors';
import { Feather } from '@expo/vector-icons';

export default function Appbar({ title, subtitle, onBackPressed }) {
    return (
        <View style={styles.wrapper}>
            <Feather name='arrow-left-circle' size={24} onPress={onBackPressed} />
            <View style={{ marginLeft: 20 }}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        lineHeight: 36,
        color: textPrimary,
    },
    subtitle: {
        fontSize: 18,
        lineHeight: 22,
        color: textSecondary,
    },
});
