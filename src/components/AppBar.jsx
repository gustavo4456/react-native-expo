import React from 'react'
import { View, StyleSheet, TouchableWithoutFeedback, ScrollView, Platform } from 'react-native'
import StyledText from './StyledText.jsx'
import Constants from 'expo-constants'
import theme from '../theme.js'
import { Link, useLocation } from 'react-router-native'

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.appBar.primary,
        flexDirection: "row",

        paddingTop: Constants.statusBarHeight + 10
    },
    scroll: {
        paddingBottom: 15
    },
    text: {
        color: theme.appBar.textSecondary,
        paddingHorizontal: 10
    },
    active: {
        color: Platform.select({
            default: theme.appBar.textPrimary,
            android: 'red'
        }),
    }
})

const AppBarTab = ({ children, to }) => {
    const { pathname } = useLocation()
    const active = pathname === to

    const textStyles = [
        styles.text,
        active && styles.active
    ]

    return (
        <Link to={to} component={TouchableWithoutFeedback}>
            <StyledText fontWeight='bold' style={textStyles}>
                {children}
            </StyledText>
        </Link>
    )
}

const AppBar = () => {
    return (
        <View style={styles.container}>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal style={styles.scroll}>
                <AppBarTab to='/'>Sign In</AppBarTab>
                <AppBarTab to='/repo'>Repositories</AppBarTab>
                <AppBarTab to='/test'>acount</AppBarTab>
                <AppBarTab to='/test'>about</AppBarTab>
                <AppBarTab to='/test'>test1</AppBarTab>
                <AppBarTab to='/test'>test2</AppBarTab>
            </ScrollView>
        </View>
    )
}

export default AppBar