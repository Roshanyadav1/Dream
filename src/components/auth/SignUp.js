import { Icon, Avatar, Button, Spinner } from '@ui-kitten/components'
import { TouchableWithoutFeedback, ImageBackground, ScrollView, Text, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import CommonInput from '../../assests/common/CommonInput';
import { auth } from '../../../firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AlertIcon = (props) => (
    <Icon {...props} name='alert-circle-outline' />
);

const LoadingIndicator = (props) => (
    <View style={[props.style, styles.indicator]}>
        <Spinner size='small' />
    </View>
);

const isValidateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

const SignUp = ({ navigation }) => {
    // console.log(value)
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
    const [errorMsg, setErrorMsg] = useState('');
    const [loadingBtn, setLoadingBtn] = useState(false)
    const [secureTextEntry, setSecureTextEntry] = React.useState(true);


    const toggleSecureEntry = () => {
        setSecureTextEntry(!secureTextEntry);
    };

    const renderIcon = (props) => (
        <TouchableWithoutFeedback onPress={toggleSecureEntry}>
            <Icon{...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
        </TouchableWithoutFeedback>
    );

    const crossIcon = (props) => (
        <TouchableWithoutFeedback onPress={() => setErrorMsg('')}>
            <Icon{...props} name='close-square-outline' />
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
                        Should contain at least 6 symbols</Text>
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


    const handleSubmit = async () => {
        if (userName.length < 3) {
            return updateError('password', setUserNameError)
        }
        if (!isValidateEmail(email)) {
            return updateError('email', setEmailError)
        }
        if (password.length < 6) {
            return updateError('weak password', setPasswordError)
        }
        if (password !== confirmPassword) {
            return updateError('password', setConfirmPasswordError)
        }
        setLoadingBtn(true)

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((response) => {
                console.log(response);
                const data = response.user
                console.log(JSON.stringify(data));
                if (data.uid) {
                    async function saveValue() {
                        await AsyncStorage.setItem('login', 'true');
                    }
                    saveValue();
                    navigation.navigate("Home")
                }
                setLoadingBtn(false)
            })
            .catch(error => {
                console.log(error);
                console.log(error.message);
                setLoadingBtn(false)
                switch (error.code) {
                    case 'auth/email-already-in-use':
                        setErrorMsg("Email already in use !")
                        break;
                    case 'auth/email-already-in-use':
                        setErrorMsg("Email already in use !")
                        break;
                }
            })
    }


    return (
        <ScrollView style={{ flex: 1, display: 'flex' }}>
            <View style={styles.profile}>
                <Avatar style={styles.images}
                    source={require('../../assests/images/logo1.png')}
                    ImageComponent={ImageBackground}
                />
            </View>
            <View
                style={styles.inputContainer}
            >
                <Text style={styles.heading}>Sign Up</Text>

                {/* Message box  */}
                <Text>
                    {
                        errorMsg &&
                        < CommonInput
                            disabled={true}
                            style={styles.errors}
                            placeholderTextColor={'red'}
                            placeholder={errorMsg ? errorMsg : ''}
                            accessoryRight={crossIcon}
                        />
                    }
                </Text>
                {/* Message box end here  */}

                <CommonInput
                    errors={userNameError}
                    style={styles.input}
                    label='Username'
                    placeholder='Username'
                    placeholderTextColor={'#9E9E9E'}
                    caption={userNameError && renderCaption("userName")}
                    value={userName}
                    onChangeText={(value) => handleChangeText(value, "userName")}
                />
                <CommonInput
                    errors={emailError}
                    style={styles.input}
                    label='E-mail'
                    placeholder='E-mail '
                    placeholderTextColor={'#9E9E9E'}
                    caption={emailError && renderCaption("email")}
                    value={email}
                    onChangeText={(value) => handleChangeText(value, "email")}
                />
                <CommonInput
                    errors={passwordError}
                    style={styles.input}
                    value={password}
                    label='Password'
                    placeholderTextColor={'#9E9E9E'}
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
                    label='Confirm Password'
                    placeholderTextColor={'#9E9E9E'}
                    placeholder='Confirm Password'
                    secureTextEntry={secureTextEntry}
                    caption={confirmPasswordError && renderCaption("confirmPassword")}
                    accessoryRight={renderIcon}
                    onChangeText={(value) => handleChangeText(value, "confirmPassword")}
                />
                <View >
                    <Button
                        onPress={handleSubmit}
                        accessoryRight={loadingBtn ? LoadingIndicator : ""}
                        disabled={loadingBtn ? "disabled" : ""}
                        style={styles.button}
                        appearance='ghost' status='control'>
                        Sign in
                    </Button>
                </View>


            </View>
            <View style={styles.containerBtn}>
                <Text style={styles.text}>Already have an account  ? </Text>
                <TouchableOpacity>
                    <Text style={styles.directed}
                        onPress={() => { navigation.navigate('Login') }}
                    >Log in
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}
export default SignUp

const styles = StyleSheet.create({
    heading: {
        color: '#33691e',
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
        backgroundColor: '#33691e',
        borderWidth: 1,
        borderColor: '#33691e',
    },
    input: {
        marginTop: 10,
        backgroundColor: 'white',
    },
    directed: {
        color: '#33691e',
        fontWeight: 'bold',
    },
    containerBtn: {
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'flex-start',
        marginHorizontal: 30,
    },
    text: {
        color: 'black',
    }
});
