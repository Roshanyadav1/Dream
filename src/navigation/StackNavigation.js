import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import { TopNavigation } from './TopNavigation';


const Stack = createNativeStackNavigator();
function StackNavigation() {

    // const [isLogin, setisLogin] = React.useState(false)

    // const isAuthonticated = (auth) => {
    //     console.log("____________");
    //     console.log(auth);
    //     console.log("____________");
    // }
    // // const isLogin = localStorage.getItem("auth")

    // React.useEffect(() => {
    //     const auth = localStorage.getItem("auth")
    //     isAuthonticated(auth);
    //     return () => {
    //         // cleanup
    //     }
    // }, [])
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