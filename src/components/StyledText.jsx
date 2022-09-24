import { Text, StyleSheet } from "react-native";
import React from "react";
import theme from "../theme.js";

const styles = StyleSheet.create({
    text: {

        color: theme.colors.textPrimary,
        fontSize: theme.fontSizes.body,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.normal
    },
    colorPrimary: {
        color: theme.colors.primary
    },
    colorSecundary: {
        color: theme.colors.textSecondary
    },
    bold: {
        fontWeight: theme.fontWeights.bold
    },

    subheading: {
        fontSize: theme.fontSizes.subheading

    },
    textAlingCenter: {
        textAlign: 'center'
    },

});
export default function StyledText({ aling, children, color, fontSize, fontWeight, style, ...restOfProps }) {
    const TextStyles = [
        styles.text,

        aling === 'center' && styles.textAlingCenter,
        color === 'primary' && styles.colorPrimary,
        color === 'secondary' && styles.colorSecundary,
        fontSize === 'subheading' && styles.subheading,
        fontWeight === 'bold' && styles.bold,
        style

    ]
    return (
        <Text style={TextStyles}{...restOfProps}>
            {children}
        </Text>
    )
}
