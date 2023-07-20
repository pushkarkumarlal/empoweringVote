import React from "react";
import {View,SafeAreaView,Text,Image,TextInput,TouchableOpacity} from 'react-native'

import {Link} from 'expo-router'

import topimage from '../../assets/loginPageTop.png'

import styles from './loginpage.style'


const loginpage=()=>{
    const [userName, setUserName] = React.useState('');
    const [password,setPassword] = React.useState('')

    return(
            <SafeAreaView style={styles.container}>
                <Image source={topimage} style={styles.topDesignRed}/>

                <View style={styles.inputContainer}>
                <TextInput placeholder='User Name' style={styles.input} onChangeText={setUserName} value={userName}/>
                <TextInput secureTextEntry={true} placeholder='Password' style={styles.input} onChangeText={setPassword} value={password}/>
                </View>

                <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.loginButtonText}><Link href='../dashboard/dashboard'>LOGIN</Link></Text>
                </TouchableOpacity>

                <View style={styles.buttomViewContainer}>

                <TouchableOpacity style={styles.touchRegister}>
                <Text style={styles.register}><Link href='../createaccount/register'>Register</Link></Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.touchForgetPassword}>
                <Text style={styles.forgetPassword} ><Link href ='../forgetPassword/forgetpassword'>Forget Password?</Link></Text>
                </TouchableOpacity>
                </View>

            </SafeAreaView>
    )
}
export default loginpage;


