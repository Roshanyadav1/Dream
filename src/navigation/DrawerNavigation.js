import React from 'react';
import { createDrawerNavigator, DrawerItemList, DrawerContentScrollView } from '@react-navigation/drawer';
//components
import BottomTabNaviagation from './BottomTabNaviagation';
import { Text, Image, StyleSheet, SafeAreaView } from 'react-native';
import logo1 from '../assests/images/logo1.png';
import MyLibrary from './../components/user/MyLibrary';
import AboutUs from './../components/user/AboutUs';

const DrawerNavigation = () => {
    const Drawer = createDrawerNavigator();



    return (
        //Making the drawer navigation
        <React.Fragment>
            <Drawer.Navigator
                screenOptions={{
                    headerTintColor: 'black',//header heading color
                    headerStyle: {
                        backgroundColor: '#003300',
                    },
                    drawerActiveTintColor: '#33691e',
                    drawerInactiveTintColor: 'black',
                    drawerStyle: {
                        position: 'absolute',
                        backgroundColor: '#003300',
                    },
                }}
                initialRouteName="GreenLeaf"
                drawerContent={(props) => <CustomSidebarMenu {...props} />}
            >
                <Drawer.Screen
                    name="GreenLeaf"
                    component={BottomTabNaviagation}
                    options={{ drawerLabel: 'Home' }}
                />
                <Drawer.Screen name="My Library" component={MyLibrary}
                    options={{ drawerLabel: 'My Library' }} />
                <Drawer.Screen name="About us" component={AboutUs}
                    options={{ drawerLabel: 'About us' }} />
            </Drawer.Navigator>
        </React.Fragment>
    );
};

export default DrawerNavigation;

function CustomSidebarMenu(props) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            {/*Top Large Image */}
            <Image
                source={logo1}
                style={styles.sideMenuProfileIcon}
            />
            <Text style={styles.mainName}>Hidden Leaf</Text>
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
        </SafeAreaView>
    )
}




const styles = StyleSheet.create({
    mainName: {
        textAlign: 'center',
        color: 'green',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    sideMenuProfileIcon: {
        marginVertical: 30,
        resizeMode: 'center',
        width: 100,
        height: 100,
        borderRadius: 50,
        alignSelf: 'center',
    },
});
