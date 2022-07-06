import { useState, createContext, useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth'
import { Text, View } from 'react-native';
import { ThemeProvider } from '@rneui/themed';
import { WelcomeScreen, LoginScreen, HomeScreen } from './screens';
import theme from './theme'

const Stack = createNativeStackNavigator();
const headerOptions = { headerShown: false }
const AuthenticatedUserContext = createContext({})

const AuthenticatedUserProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  return (
    <AuthenticatedUserContext.Provider value={{ user, setUser }}>
      {children}
    </AuthenticatedUserContext.Provider>
  )
}

const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={WelcomeScreen} options={headerOptions} />
      <Stack.Screen name="Login" component={LoginScreen}
        options={headerOptions} />
    </Stack.Navigator>
  )
}

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={headerOptions} />
    </Stack.Navigator>
  )
}

const RootNavigator = () => {
  const { user, setUser } = useContext(AuthenticatedUserContext);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,
      async authenticatedUser => {
        authenticatedUser ? setUser(authenticatedUser) : setUser(null)
        setLoading(false)
      }
    )
    return () => unsubscribe()
  }, [user]);
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Ciao</Text>
      </View>
    )
  }
  return (
    <NavigationContainer>
      {user ? <AuthNavigator /> : <Navigator />}
    </NavigationContainer>
  )
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthenticatedUserProvider>
        <RootNavigator />
      </AuthenticatedUserProvider>
    </ThemeProvider>
  );
}
