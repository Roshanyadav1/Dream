import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
//components
import BottomTabNaviagation from './BottomTabNaviagation';
import { View, Text } from 'react-native';


const DrawerNavigation = () => {
    const Drawer = createDrawerNavigator();

    function About() {
        return (
            <View>
                <Text>About</Text>
            </View>
        )
    }

    function MyLibrary() {
        return (
            <View>
                <Text>MyLibrary</Text>
            </View>
        )
    }

    return (
        //Making the drawer navigation
        <React.Fragment>
            <Drawer.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName="GreenLeaf"
            >
                <Drawer.Screen
                    name="GreenLeaf"
                    component={BottomTabNaviagation}
                    options={{ drawerLabel: 'Home' }}
                />
                <Drawer.Screen name="MyLibrary" component={MyLibrary} />
                <Drawer.Screen name="About" component={About} />
            </Drawer.Navigator>
        </React.Fragment>
    );
};

export default DrawerNavigation;


