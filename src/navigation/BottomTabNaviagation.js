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
            screenOptions={{
                tabBarActiveTintColor: '#33691e',
                tabBarInactiveTintColor: 'black',
                headerShown: false,
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: '#c1f0af',
                },
            }}
            initialRouteName="Home"
        >
            <Tab.Screen

                name={'Home'}
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Image
                                source={home}
                                style={focused ? style.imageActive : style.image}></Image>
                        </View>
                    ),
                }}></Tab.Screen>
            <Tab.Screen
                name={'Git'}
                component={PersonalScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Image
                                source={git}
                                style={focused ? style.imageActive : style.image}></Image>
                        </View>
                    ),
                }}></Tab.Screen>
            <Tab.Screen
                name={'Hello!'}
                component={LogoScreen}
                options={{
                    tabBarIcon: () => (
                        <View
                        >
                            <Image style={style.mainlogo} source={logo1}></Image>
                        </View>
                    ),
                }}></Tab.Screen>
            <Tab.Screen
                name={'Linked In'}
                component={ProcessScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Image
                                source={linkedin}
                                style={focused ? style.imageActive : style.image}></Image>
                        </View>
                    ),
                }}></Tab.Screen >
            <Tab.Screen
                name={'Profile'}
                component={UserScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Image
                                source={profile}
                                style={focused ? style.imageActive : style.image}></Image>
                        </View>
                    ),
                }}></Tab.Screen>
        </Tab.Navigator >
    );
};

export default BottomTabNaviagation;

function LogoScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'green' }}>
            <Image
                source={logo1}
                style={{ height: 88, width: 88 }}></Image>
            <Text>Love to Working on it </Text>
        </View>
    );
}

function UserScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'green' }}>
            <Image
                source={logo1}
                style={{ height: 88, width: 88 }}></Image>
            <Text>Profile ! Working on it </Text>
        </View>
    );
}

function HomeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'green' }}>
            <Image
                source={logo1}
                style={{ height: 88, width: 88 }}></Image>
            <Text>Home ! Working on it </Text>
        </View>
    );
}

function ProcessScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'green' }}>
            <Image
                source={logo1}
                style={{ height: 88, width: 88 }}></Image>
            <Text>Linded In ! Working on it </Text>
        </View>
    );
}

function PersonalScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'green' }}>
            <Image
                source={logo1}
                style={{ height: 88, width: 88 }}></Image>
            <Text>Git ! Working on it </Text>
        </View>
    );
}

const style = StyleSheet.create({
    mainlogo: {
        width: 50,
        height: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
    },
    image: {
        width: 20,
        height: 20,
    },
    imageActive: {
        width: 25,
        height: 25,
        marginBottom: 3,
        borderRadius: 4,
    }
})