import React, { useState } from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import styles from './styles';
import AuthServiceData from '../../service/auth.service';
import { Input, Button } from '@rneui/themed';
const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [loading, setLoading] = useState(false)

    const onLoginPress = async () => {
        setLoading(true)
        if (email !== '' && password !== '') {
            AuthServiceData.login(email, password)
                .then(() => {
                    setLoading(false)
                })
                .catch((error) => {
                    console.log(error.message);
                    setLoading(false)
                    const errorMessage = error.message
                    setErrorMessage(errorMessage)
                })
        }
    }


    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.logo}>GS IMPIANTI</Text>
            </View>
            <Input
                placeholder='E-mail'
                placeholderTextColor="#aaaaaa"
                onChangeText={(text) => setEmail(text)}
                value={email}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                keyboardType='email-address'
                errorStyle={{ color: 'red' }}
                errorMessage={errorMessage}
            />
            <Input
                placeholderTextColor="#aaaaaa"
                secureTextEntry
                placeholder='Password'
                onChangeText={(text) => setPassword(text)}
                value={password}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                errorMessage={errorMessage} />
            <Button
                style={styles.button}
                loading={loading}
                onPress={onLoginPress}
                title="Login" />
        </SafeAreaView>
    )
}

export default LoginScreen