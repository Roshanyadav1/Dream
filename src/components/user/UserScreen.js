import { View, Image, StyleSheet, ScrollView } from 'react-native'
import { Button, Card, Text } from '@ui-kitten/components';
import React from 'react'
import logo1 from '../../assests/images/logo1.png';
import { Icon, Menu, MenuGroup, MenuItem } from '@ui-kitten/components';

const SmartphoneIcon = (props) => (
    <Icon {...props} name='smartphone-outline' />
);

const BrowserIcon = (props) => (
    <Icon {...props} name='browser-outline' />
);

const ColorPaletteIcon = (props) => (
    <Icon {...props} name='color-palette-outline' />
);

const StarIcon = (props) => (
    <Icon {...props} name='star' />
);

const MenuGroupsShowcase = () => {

    const [selectedIndex, setSelectedIndex] = React.useState(null);

    return (
        <React.Fragment>
            <Menu
                selectedIndex={selectedIndex}
                onSelect={index => setSelectedIndex(index)}>
                <MenuItem title='C and C++' accessoryLeft={StarIcon} />
                <MenuItem title='Data structure and algorithm' accessoryLeft={StarIcon} />
                <MenuItem title='HTML and CSS' accessoryLeft={StarIcon} />
                <MenuItem title='Java and Javascript' accessoryLeft={StarIcon} />
                <MenuItem title='React Js and redux' accessoryLeft={StarIcon} />
                <MenuItem title='React Native' accessoryLeft={StarIcon} />
            </Menu>
        </React.Fragment>
    );
};

const Header = (props) => (
    <View {...props}>
        <Text category='h6'>Roshanyadav1</Text>
        <Text category='s1'>By Github</Text>
    </View>
);

const Footer = (props) => (
    <View {...props} style={[props.style, styles.footerContainer]}>

        <Button
            style={{ maxHeight: 40 }}
            size='small'>
            Connect
        </Button>
    </View>
);

export default function UserScreen() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.twoCombination}>
                <View style={styles.first}>
                    <Image source={logo1} style={styles.image} />
                </View>
                <View style={styles.second}>
                    <Text style={styles.headingOne} >
                        Roshan Yadav
                    </Text>
                    <Text style={styles.heading} >
                        BACHELOR OF COMPUTER APPLICATION (BCA)
                    </Text>
                    <Text style={styles.heading} >
                        FRONT-END DEVELOPER (REACT JS + REDUX)
                    </Text>
                </View>
            </View>

            <Card style={styles.card} header={Header} footer={Footer}>
                <Text style={styles.text}>
                    To start my career as a technical person In a software field by using my technical knowledge and skills in learning environment for the growth of the organization & self.
                </Text>
                <Text >
                    Mobile : 9753439815
                </Text>
                <Text >
                    Email : mrroshan738949@gmail.com
                </Text>
                <MenuGroupsShowcase />
            </Card>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    menuOpen: {
        backgroundColor: 'blue'
    },
    text: {
        paddingVertical: 10,
    },
    card: {
        flex: 1,
        margin: 2,
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    footerControl: {
        marginHorizontal: 2,
        backgroundColor: 'green',
        borderColor: 'green'
    },
    container: {
        marginBottom: 50,
        flex: 1,
    },
    twoCombination: {
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
    },
    first: {
        width: '40%'
    },
    second: {
        width: '60%',
    },
    image: {
        height: 140,
        width: 140,
    },
    headingOne: {
        opacity: 1,
        color: "black",
        padding: 15,
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center",
    },
    heading: {
        padding: 3,
        opacity: 1,
        color: "black",
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center",
    },
});