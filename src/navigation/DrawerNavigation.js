import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
//components
import MyLibrary from './../components/MyLibrary';
import About from '../components/About';
import BottomTabNaviagation from './BottomTabNaviagation';


const DrawerNavigation = () => {
    const Drawer = createDrawerNavigator();

    return (
        //Making the drawer navigation
        <React.Fragment>
            <Drawer.Navigator
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
