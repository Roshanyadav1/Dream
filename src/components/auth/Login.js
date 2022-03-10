import { Text, Icon, Avatar, Button, Spinner } from '@ui-kitten/components'
import { TouchableWithoutFeedback, ImageBackground, ScrollView, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import CommonInput from '../../assests/common/CommonInput';
import { auth } from '../../../firebase';


const AlertIcon = (props) => (
    <Icon {...props} name='alert-circle-outline' />
);

const LoadingIndicator = () => (
    <View >
        <Spinner size='small' style={styles.indicator} />
    </View>
);

//Validate the email
const isValidateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

const Login = ({ navigation }) => {
    const updateError = (error, stateUpdater) => {
        stateUpdater(error)
        setTimeout(() => {
            stateUpdater(null)
        }, 2500);
    }

    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
    })

    const { email, password } = userInfo


    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
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

    //Rendering the error caption message
    const renderCaption = (value) => {
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
            if (passwordError) {
                return (
                    <View style={styles.captionContainer}>
                        <Text style={styles.captionText}>
                            {AlertIcon(styles.captionIcon)}
                            Invalid password !</Text>
                    </View>
                )
            }
            return (
                <View style={styles.captionContainer}>
                    <Text style={styles.captionText}>
                        {AlertIcon(styles.captionIcon)}
                        Should contain at least 6 symbols</Text>
                </View>
            )
        }
    }


    const handleChangeText = (value, fieldName) => {
        setUserInfo({ ...userInfo, [fieldName]: value })
    }

    const handleSubmit = async () => {
        // navigation.navigate('DrawerNavigation')
        if (!isValidateEmail(email)) {
            return updateError('email', setEmailError)
        }
        if (password.length < 6) {
            return updateError('password', setPasswordError)
        }
        setLoadingBtn(true)
        console.log("________________________");
        console.log(email, password);
        auth
            .signInWithEmailAndPassword(email, password)
            .then((response) => {
                const data = response.user
                console.log("________________________")
                console.log(data.uid);
                console.log("________________________")
                setLoadingBtn(false)
                navigation.navigate('DrawerNavigation')
            })
            .catch(error => {
                console.log(error.code);
                setLoadingBtn(false)
                switch (error.code) {
                    case 'auth/wrong-password':
                        setErrorMsg("invalid password !")
                        updateError('invalid password', setPasswordError)
                        break;
                    case 'auth/too-many-requests':
                        Alert("Account has been locked try again later")
                        // updateError('invalid password', setPasswordError)
                        break;
                    case 'auth/network-request-failed':
                        Alert("Network problem")
                        // updateError('invalid password', setPasswordError)
                        break;
                    case 'auth/user-not-found':
                        setErrorMsg("User not found")
                        updateError('invalid password', setPasswordError)
                        updateError('invalid email', setEmailError)
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
                <Text style={styles.heading}>Log in</Text>
                {/* Message box  */}
                <Text style={{ flex: 1, marginTop: 5 }}>
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
                    accessoryRight={renderIcon}
                    onChangeText={(value) => handleChangeText(value, "password")}
                />

                <View >
                    <Button
                        onPress={handleSubmit}
                        accessoryRight={loadingBtn ? LoadingIndicator : ""}
                        disabled={loadingBtn ? "disabled" : ""}
                        style={styles.button}
                        appearance='control' status='control'>
                        Log in
                    </Button>
                </View>


            </View>
            <View style={styles.containerBtn}>
                <Text>Create new account ? </Text>
                <TouchableOpacity>
                    <Text style={styles.directed}
                        onPress={() => { navigation.navigate('SignUp') }}
                    >Sign up</Text>
                </TouchableOpacity>
            </View>
        </ScrollView >
    )
}

export default Login

const styles = StyleSheet.create({

    indicator: {
        borderColor: '#214513',
        color: 'white',
    },
    controlContainer: {
        borderRadius: 4,
        justifyContent: 'center',
        backgroundColor: '#3366FF',
    },
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
        borderColor: '#33691e',
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
    errors: {
        marginTop: 5,
        borderColor: 'red',
        borderWidth: 1
    }
});



