import React from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon, Layout, Tab, TabView, Text } from '@ui-kitten/components';
import MyCollection from '../components/MyCollection';
import MyGames from '../components/MyGames';
import FindMe from '../components/FindMe';



const ContactMe = (props) => (
    <Icon {...props} name='list' />
);
const Mycollection = (props) => (
    <Icon {...props} name='heart' />
)
const Games = (props) => (
    <Icon {...props} name='headphones' />
)

export const TopNavigation = ({ navigation }) => {

    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const shouldLoadComponent = (index) => index === selectedIndex;

    return (
        <SafeAreaView style={styles.container}>
            <TabView
                style={styles.container}
                selectedIndex={selectedIndex}
                shouldLoadComponent={shouldLoadComponent}
                onSelect={index => setSelectedIndex(index)}>
                <Tab title='My Collection' icon={Mycollection}>
                    <Layout style={styles.tabContainer} style={styles.container}>
                        <MyCollection />
                    </Layout>
                </Tab>
                <Tab title='Games' icon={Games}>
                    <Layout style={styles.tabContainer} style={styles.container}>
                        <MyGames />
                    </Layout>
                </Tab>
                <Tab title='Find me' icon={ContactMe}>
                    <Layout style={styles.tabContainer} style={styles.container}>
                        <FindMe />
                    </Layout>
                </Tab>
            </TabView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabContainer: {
        height: 64,
        alignItems: 'center',
        justifyContent: 'center',
    },
});