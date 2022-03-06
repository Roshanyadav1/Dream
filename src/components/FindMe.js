

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Card, Layout, Text } from '@ui-kitten/components';

const Header = (props) => (
    <View {...props}>
        <Text category='h6'>Roshan Yadav</Text>
        <Text category='s1'>
            mrroshan738949@gmail.com
        </Text>
    </View>
);

const Footer = (props) => (
    <View {...props} style={[props.style, styles.footerContainer]}>
        <Button
            style={styles.footerControl}
            size='small'
            status='basic'>
            CANCEL
        </Button>
        <Button
            style={styles.footerControl}
            size='small'>
            ACCEPT
        </Button>
    </View>
);
const FindMe = () => (
    <React.Fragment>
        <Card style={styles.card} header={Header} footer={Footer}>
            <Text>
                I am Roshan Yadav and I love to reading novel and thought's of different person in Quora and i am a front-end developer
            </Text>
        </Card>

    </React.Fragment>
);

export default FindMe;

const styles = StyleSheet.create({
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
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
    },
});