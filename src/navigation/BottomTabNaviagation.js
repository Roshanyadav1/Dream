import React from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet
} from 'react-native';
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import logo1 from '../assests/images/logo1.png';
import home from '../assests/images/home.png';
import git from '../assests/images/git.png';
import linkedin from '../assests/images/linkedin.png';
import profile from '../assests/images/profile.png';

const Tab = createBottomTabNavigator();

const BottomTabNaviagation = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                showLabel: false,
                style: {
                    backgroundColor: 'white',
                    position: 'absolute',
                    bottom: 40,
                    marginHorizontal: 12,
                    height: 50,
                    borderRadius: 10,
                    shadowColor: '#000',
                    shadowOpacity: 0.04,
                    shadowOffset: {
                        width: 9,
                        height: 9,
                    },
                    paddingHorizontal: 20,
                },
            }}>
            <Tab.Screen
                name={'Home'}
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                position: 'absolute',

                                //  top: '50%'
                            }}>
                            {/* <FontAwesome5
                                name="home"
                                size={20}
                                color={focused ? 'red' : 'gray'}></FontAwesome5> */}
                            <Image
                                source={home}
                                style={style.image}></Image>
                        </View>
                    ),
                }}></Tab.Screen>
            <Tab.Screen
                name={'Git'}
                component={PersonalScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                position: 'absolute',

                                //  top: '50%'
                            }}>
                            <Image
                                source={git}
                                style={style.image}></Image>
                        </View>
                    ),
                }}></Tab.Screen>
            {
                //extra tab screens for process bar
            }
            <Tab.Screen
                name={'Hello!'}
                component={LogoScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View
                        >
                            <Image style={{
                                width: 50,
                                height: 50,
                                borderRadius: 50,
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginBottom: 30,
                            }} source={logo1}></Image>
                        </View>
                    ),
                }}></Tab.Screen>

            <Tab.Screen
                name={'Linked In'}
                component={ProcessScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                position: 'absolute',
                            }}>
                            <Image
                                source={linkedin}
                                style={style.image}></Image>
                        </View>
                    ),
                }}></Tab.Screen >
            <Tab.Screen
                name={'Profile'}
                component={UserScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                position: 'absolute',
                            }}>
                            <Image
                                source={profile}
                                style={style.image}></Image>
                        </View>
                    ),
                }}></Tab.Screen>
        </Tab.Navigator >
    );
};

export default BottomTabNaviagation;

function LogoScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Logo!</Text>
        </View>
    );
}

function UserScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>UserProfile!</Text>
        </View>
    );
}

function HomeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
        </View>
    );
}

function ProcessScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>ProcessBar!</Text>
        </View>
    );
}

function PersonalScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Git</Text>
        </View>
    );
}

const style = StyleSheet.create({
    image: {
        width: 25,
        height: 25,
        marginBottom: 5,
    }
})