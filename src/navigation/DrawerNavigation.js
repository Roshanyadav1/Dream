import React from 'react';
import { Button } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
//components
import { HomeStack, AboutStack, StatusStack } from './MyStack';

const DrawerNavigation = ({ navigation }) => {
    const Drawer = createDrawerNavigator();
    // to open the drawer
    const openDrawe = () => {
        navigation.openDrawer();
    };

    return (
        //Making the drawer navigation
        <Drawer.Navigator>
            <Drawer.Screen
                name="Home"
                component={HomeStack}
                options={{
                    headerRight: () => (
                        <Button onPress={openDrawe} title="Info" color="#000" />
                    ),
                }}
            />
            <Drawer.Screen name="Status" component={StatusStack} />
            <Drawer.Screen name="About" component={AboutStack} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigation;
