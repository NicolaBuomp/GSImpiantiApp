import React from 'react'
import { Button, SafeAreaView, Text } from 'react-native'
import AuthDataService from '../../service/auth.service'

const HomeScreen = ({ navigation, route }) => {
    return (
        <SafeAreaView>
            <Button title="Logout" onPress={() => AuthDataService.logout()} />
        </SafeAreaView>
    )
}

export default HomeScreen