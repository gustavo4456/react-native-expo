import { View, Image, StyleSheet, Platform } from "react-native";
import React from "react";
import StyledText from "./StyledText";
import RepositoryStats from "./RepositoryStats";
import theme from "../theme";

const RepositoryItemHeader = (props) => (
    <View style={{ flexDirection: 'row', paddingBottom: 2 }}>
        <View style={{ paddingRight: 10 }}>
            <Image style={styles.image} source={{ uri: props.ownerAvatarUrl }} />
        </View>
        <View style={{ flex: 1 }}>
            <StyledText fontWeight='bold'>{props.fullName}</StyledText>
            <StyledText color='secondary'>{props.description}</StyledText>
            <StyledText style={styles.language}>{props.language}</StyledText>
        </View>
    </View>
)

const RepositoryItem = (props) => (
    <View key={props.id} style={styles.container}>
        <RepositoryItemHeader{...props}></RepositoryItemHeader>
        <RepositoryStats{...props}></RepositoryStats>
    </View>
)

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingVertical: 5
    },
    language: {
        padding: 4,
        color: theme.colors.white,
        backgroundColor: Platform.select({
            android: theme.colors.primary,
            default: 'purple'
        }),
        alignSelf: 'flex-start',
        marginVertical: 4,
        borderRadius: 4,
        overflow: 'hidden'
    },
    image: {
        width: 48,
        height: 48,
        borderRadius: 4
    },
})

export default RepositoryItem