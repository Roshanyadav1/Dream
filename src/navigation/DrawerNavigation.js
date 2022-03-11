import React from 'react';
import { createDrawerNavigator, DrawerItem, DrawerItemList, DrawerContentScrollView } from '@react-navigation/drawer';
//components
import BottomTabNaviagation from './BottomTabNaviagation';
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';
import logo1 from '../assests/images/logo1.png';

const DrawerNavigation = () => {
    const Drawer = createDrawerNavigator();



    return (
        //Making the drawer navigation
        <React.Fragment>
            <Drawer.Navigator
                screenOptions={{
                    headerTintColor: 'green',//header heading color
                    headerStyle: {
                        backgroundColor: '#c1f0af'
                    },
                    drawerActiveTintColor: '#33691e',
                    drawerInactiveTintColor: 'black',
                    drawerStyle: {
                        position: 'absolute',
                        backgroundColor: '#c1f0af',
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
                <Drawer.Screen name="About us" component={About}
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

function About() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'green' }}>
            <Image
                source={logo1}
                style={{ height: 88, width: 88 }}></Image>
            <Text>About ! Working on it </Text>
        </View>
    )
}

function MyLibrary() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'green' }}>
            <Image
                source={logo1}
                style={{ height: 88, width: 88 }}></Image>
            <Text>MyLibrary ! Working on it </Text>
        </View >
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
