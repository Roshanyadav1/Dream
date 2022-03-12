import React from 'react';
import logo2 from '../../assests/images/logo1.png';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
// import { useDispatch, useSelector } from 'react-redux';

export default function Home({ navigation }) {
    // const dispatch = useDispatch();
    // const counter = useSelector((state) => state.auth)
    // console.log(counter)
    return (
        <View style={styles.container}>

            <Image style={{
                backgroundColor: 'white',
                marginBottom: 40,
                width: 150,
                height: 150,
                borderRadius: 10,
                shadowColor: 'red',
                shadowOpacity: 1,

            }}
                source={logo2} />
            <TouchableOpacity
                style={styles.loginBtn}
                onPress={() => navigation.navigate('Login')}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.loginBtn}
                onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.loginText}>Sign Up</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },


    loginBtn: {
        width: '80%',
        borderRadius: 20,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        backgroundColor: '#33691e',
    },

    loginText: {
        color: 'white',
        fontSize: 15,
    }
});
