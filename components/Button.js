import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import {
    textPrimary,
    primary,
    disabledSurface,
    textDisabled,
    secondary,
} from '../utils/colors';

const PrimaryButton = ({
    onPress,
    title,
    disabled = false,
    type = 'primary',
}) => {
    const buttonStyle =
        type === 'primary' ? styles.primaryCTA : styles.secondaryCTA;
    const buttonTextStyle =
        type === 'primary' ? styles.primaryCTAText : styles.secondaryCTAText;

    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled}
            style={disabled ? styles.disabledCTA : buttonStyle}>
            <Text style={disabled ? styles.disabledCTAText : buttonTextStyle}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    primaryCTA: {
        padding: 10,
        backgroundColor: primary,
        width: 150,
        marginTop: 20,
        marginBottom: 10,
        borderRadius: 5,
    },
    primaryCTAText: {
        color: textPrimary,
        textAlign: 'center',
    },
    disabledCTA: {
        padding: 10,
        backgroundColor: disabledSurface,
        width: 150,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
    disabledCTAText: {
        color: textDisabled,
        textAlign: 'center',
    },
    secondaryCTA: {
        padding: 10,
        backgroundColor: 'transparent',
        width: 150,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 5,
        borderStyle: 'solid',
        borderWidth: 3,
        borderColor: secondary,
    },
    secondaryCTAText: {
        color: secondary,
        textAlign: 'center',
    },
});

export default PrimaryButton;
