import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import { TopNavigation } from './TopNavigation';
import MyCollection from '../components/MyCollection';


const Stack = createNativeStackNavigator();

function StackNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={Login}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="SignUp" component={SignUp}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="Home" component={TopNavigation}
                    options={{ headerShown: false }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default StackNavigation;