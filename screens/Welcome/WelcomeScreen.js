import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import styles from './styles';

const WelcomeScreen = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <Text>WelcomeScreen</Text>
            <Button title="Vai al login" onPress={() => navigation.navigate('Login')} />
        </View>
    )
}

export default WelcomeScreen