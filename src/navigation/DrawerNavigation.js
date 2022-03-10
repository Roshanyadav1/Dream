import React from 'react';
import { Button } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
//components
import Landing from '../components/Landing';
import MyLibrary from './../components/MyLibrary';
import About from '../components/About';


const DrawerNavigation = ({ navigation }) => {
    const Drawer = createDrawerNavigator();


    return (
        //Making the drawer navigation
        <Drawer.Navigator
            initialRouteName="Landing"
        >
            <Drawer.Screen
                name="Landing"
                component={Landing}
                options={{
                    headerRight: () => (
                        <Button
                            // onPress={() => props.navigation.toggleDrawer()}
                            title="Info" color="#000" />
                    ),
                }}
            />
            <Drawer.Screen name="MyLibrary" component={MyLibrary} />
            <Drawer.Screen name="About" component={About} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigation;
