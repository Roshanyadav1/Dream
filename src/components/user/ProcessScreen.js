import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Card, Text } from '@ui-kitten/components';

const Header = (props) => (
    <View {...props}>
        <Text category='h6'>Roshanyadav1</Text>
        <Text category='s1'>By Github</Text>
    </View>
);


const ProcessScreen = () => (
    <React.Fragment>
        <Card style={styles.card} header={Header}  >
            <Text>
                I have 6 repositories and i work in different kind of thing where its web or an app also i give the repo where i practive myself .

            </Text>
            <Text style={styles.text}>
                My first project was the totally mess up even i couldn't do a thing i am only learning and learning after that the application was the begin one that show how i far away from the learning way.
            </Text>
            <Text>
                The second project i created a simple static website and the web is awasome i make some my own
            </Text>
            <Text style={styles.text}>
                The third when i lear react and start making shit on it. This time i actally so gratefull on my past day whatever we done i grow up and still the fight continue
            </Text>
        </Card>

    </React.Fragment >
);

export default ProcessScreen

const styles = StyleSheet.create({
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
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
    },
});