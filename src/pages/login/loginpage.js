import React from "react";
import {View,SafeAreaView,Text,Image,TextInput,TouchableOpacity} from 'react-native'

import {Link} from 'expo-router'

import topimage from '../../../assets/loginPageTop.png'

import styles from './loginpage.style'





const loginpage=()=>{
    const [userName, setUserName] = React.useState('');
    const [password,setPassword] = React.useState('')

    return(
    
        
            <View style={styles.container}>
                <Image source={topimage} style={styles.topDesignRed}/>
                <View style={styles.inputContainer}>
                <TextInput placeholder='User Name' style={styles.input} onChangeText={setUserName} value={userName}/>
                <TextInput secureTextEntry={true} placeholder='Password' style={styles.input} onChangeText={setPassword} value={password}/>
                </View>

                <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.loginButtonText}><Link href=''>LOGIN</Link></Text>
                </TouchableOpacity>

                <TouchableOpacity><Text style={styles.register}>Register</Text></TouchableOpacity>
                <View style={styles.blueLine}></View>
                
                
                <TouchableOpacity><Text style={styles.forgetPassword} >Forget Password?</Text></TouchableOpacity>
                <View style={styles.redLine}></View>


            </View>
        
    )
}

export default loginpage;


