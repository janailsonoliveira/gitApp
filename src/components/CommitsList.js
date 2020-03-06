import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const CommitsList = ({ avatar, message }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: avatar }} />
            <Text>{message}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 15,
        marginTop: 15,
        alignItems: 'center'
    },
    image: {
        height: 60,
        width: 60,
        borderRadius: 50,
        marginRight: 15
    }
})

export default CommitsList
