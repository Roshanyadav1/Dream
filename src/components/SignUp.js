import { Icon, Avatar, Button } from '@ui-kitten/components'
import { TouchableWithoutFeedback, ImageBackground, ScrollView, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import CommonInput from '../assests/common/CommonInput';

const AlertIcon = (props) => (
    <Icon {...props} name='alert-circle-outline' />
);


const isValidateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

const SignUp = ({ navigation }) => {
    const updateError = (error, stateUpdater) => {
        stateUpdater(error)
        setTimeout(() => {
            stateUpdater(null)
        }, 2500);
    }

    const [userInfo, setUserInfo] = useState({
        userName: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    const { userName, email, password, confirmPassword } = userInfo

    const [userNameError, setUserNameError] = useState('')
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('')
    const [secureTextEntry, setSecureTextEntry] = React.useState(true);


    const toggleSecureEntry = () => {
        setSecureTextEntry(!secureTextEntry);
    };

    const renderIcon = (props) => (
        <TouchableWithoutFeedback onPress={toggleSecureEntry}>
            <Icon{...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
        </TouchableWithoutFeedback>
    );

    const renderCaption = (value) => {
        if (value === "userName") {
            return (
                <View style={styles.captionContainer}>
                    <Text style={styles.captionText}>
                        {AlertIcon(styles.captionIcon)}
                        Enter your username</Text>
                </View>
            )
        }
        if (value === "email") {
            return (
                <View style={styles.captionContainer}>
                    <Text style={styles.captionText}>
                        {AlertIcon(styles.captionIcon)}
                        Enter your email</Text>
                </View>
            )
        }
        if (value === "password") {
            return (
                <View style={styles.captionContainer}>
                    <Text style={styles.captionText}>
                        {AlertIcon(styles.captionIcon)}
                        Should contain at least 5 symbols</Text>
                </View>
            )
        }
        if (value === "confirmPassword") {
            return (
                <View style={styles.captionContainer}>
                    <Text style={styles.captionText}>
                        {AlertIcon(styles.captionIcon)}
                        Invalid cridential</Text>
                </View>
            )
        }
    }

    const handleChangeText = (value, fieldName) => {
        setUserInfo({ ...userInfo, [fieldName]: value })
    }

    const handleSubmit = () => {
        if (userName.length < 3) {
            return updateError('password', setUserNameError)
        }
        if (!isValidateEmail(email)) {
            return updateError('email', setEmailError)
        }
        if (password.trim() && password.length < 5) {
            return updateError('password', setPasswordError)
        }
        if (password !== confirmPassword) {
            return updateError('password', setConfirmPasswordError)
        }
        // return true
        navigation.navigate('Home')
    }


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
                <Text style={styles.heading}>Sign Up</Text>
                <CommonInput
                    errors={userNameError}
                    style={styles.input}
                    label='Username'
                    placeholder='Username'
                    placeholderTextColor={'white'}
                    caption={userNameError && renderCaption("userName")}
                    value={userName}
                    onChangeText={(value) => handleChangeText(value, "userName")}
                />
                <CommonInput
                    errors={emailError}
                    style={styles.input}
                    label='E-mail'
                    placeholder='E-mail '
                    placeholderTextColor={'white'}
                    caption={emailError && renderCaption("email")}
                    value={email}
                    onChangeText={(value) => handleChangeText(value, "email")}
                />
                <CommonInput
                    errors={passwordError}
                    style={styles.input}
                    value={password}
                    label='Password'
                    placeholderTextColor={'white'}
                    placeholder='Password'
                    secureTextEntry={secureTextEntry}
                    caption={passwordError && renderCaption("password")}
                    // accessoryRight={renderIcon}
                    onChangeText={(value) => handleChangeText(value, "password")}
                />
                <CommonInput
                    errors={confirmPasswordError}
                    style={styles.input}
                    value={confirmPassword}
                    label='confirmPassword'
                    placeholderTextColor={'white'}
                    placeholder='confirmPassword'
                    secureTextEntry={secureTextEntry}
                    caption={confirmPasswordError && renderCaption("confirmPassword")}
                    accessoryRight={renderIcon}
                    onChangeText={(value) => handleChangeText(value, "confirmPassword")}
                />
                <Button style={styles.button} onPress={handleSubmit} appearance='filled' status='primary'>
                    Sign up
                </Button>
            </View>
            <View style={styles.containerBtn}>
                <Text>Already have an account  ? </Text>
                <TouchableOpacity>
                    <Text style={styles.directed}
                        onPress={() => { navigation.navigate('Login') }}
                    >Log in</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}
export default SignUp

const styles = StyleSheet.create({
    heading: {
        color: '#7f97ba',
        fontWeight: 'bold',
        fontFamily: 'Helvetica Neue',
        fontSize: 30,
    },
    captionContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    captionIcon: {
        width: 10,
        height: 10,
        marginRight: 5,
    },
    inputContainer: {
        justifyContent: 'center',
        alignContent: "center",
        alignItems: 'center',
        width: '90%',
        marginHorizontal: '5%',
        display: 'flex',
    },
    captionText: {
        fontSize: 12,
        fontWeight: "400",
        fontFamily: "opensans-regular",
        color: "red",
    },
    images: {
        height: 150,
        width: 150,
    },
    profile: {
        marginVertical: 40,
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
