import { Input, Icon, Avatar, Button } from '@ui-kitten/components'
import { TouchableWithoutFeedback, ImageBackground, ScrollView, Text, TouchableOpacity } from 'react-native';
import React from 'react'
import { View, StyleSheet } from 'react-native'
import CommonInput from '../assests/common/CommonInput';


export default function Login() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [secureTextEntry, setSecureTextEntry] = React.useState(true);


    const toggleSecureEntry = () => {
        setSecureTextEntry(!secureTextEntry);
    };

    const renderIcon = (props) => (
        <TouchableWithoutFeedback onPress={toggleSecureEntry}>
            {/* <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'}/> */}
            <Text>
                {
                    secureTextEntry ? "Show" : "Hide"
                }
            </Text>
        </TouchableWithoutFeedback>
    );
    return (
        <ScrollView style={{ flex: 1, display: 'flex' }}>
            <View style={styles.profile}>
                <Avatar style={styles.images}
                    source={require('../assests/images/logo.png')}
                    ImageComponent={ImageBackground}
                />
            </View>
            <View
                style={styles.inputContainer}
            >
                <CommonInput
                    style={styles.input}
                    label='E-mail'
                    placeholder='E-mail '
                    placeholderTextColor={'white'}
                    value={email}
                    onChangeText={nextValue => setEmail(nextValue)}
                />
                <CommonInput
                    style={styles.input}
                    value={password}
                    label='Password'
                    placeholderTextColor={'white'}
                    placeholder='Password'
                    secureTextEntry={secureTextEntry}
                    accessoryRight={renderIcon}
                    onChangeText={nextValue => setPassword(nextValue)}
                />
                <Button style={styles.button} appearance='filled' status='primary'>
                    Login
                </Button>
            </View>
            <View style={styles.containerBtn}>
                <Text>Create new account </Text>
                <TouchableOpacity>
                    <Text style={styles.directed}>Sign up</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    captionContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    captionIcon: {
        width: 10,
        height: 10,
        marginRight: 5
    },
    inputContainer: {
        justifyContent: 'center',
        alignContent: "center",
        alignItems: 'center',
        width: '90%',
        marginHorizontal: '5%',
        display: 'flex',
    },
    images: {
        height: 150,
        width: 150,
    },
    profile: {
        marginVertical: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        width: 150,
        margin: 20,
    },
    input: {
        marginTop: 10,
        backgroundColor: '#7f97ba',
    },
    directed: {
        color: 'blue',
        fontWeight: 'bold',
    },
    containerBtn: {
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'flex-start',
        marginHorizontal: 30,
    }
});
