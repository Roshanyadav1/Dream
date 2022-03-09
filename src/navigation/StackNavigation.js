import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from '../components/auth/Home';
import SignUp from './../components/auth/SignUp';
import Login from '../components/auth/Login';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        title: 'Welcome to Green Leaf',
                        headerStyle: {
                            flex: 1,
                            backgroundColor: '#33691e',
                        },
                        headerTintColor: 'white',
                        headerTitleStyle: {
                            fontSize: 24,
                            textAlign: 'center',
                            justifyContent: 'center',
                        },
                    }}
                />
                <Stack.Screen
                    headerMode="false"
                    name="Login"
                    component={Login}
                    options={{
                        title: 'Hello',
                        headerStyle: {
                            backgroundColor: '#33691e',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            paddingRight: 48,
                            fontSize: 24,
                            textAlign: 'center',
                            fontWeight: 'bold',
                        },
                    }}
                />
                <Stack.Screen
                    name="SignUp"
                    component={SignUp}
                    options={{
                        title: 'WELCOME!',
                        headerStyle: {
                            backgroundColor: '#33691e',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            paddingRight: 48,
                            fontSize: 24,
                            textAlign: 'center',

                            fontWeight: 'bold',
                        },
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default StackNavigation;