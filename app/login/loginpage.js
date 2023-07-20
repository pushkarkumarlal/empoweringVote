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
                <View style={styles.container1}>
                    <Image source={topimage} style={styles.imageStyle}/>
                </View>
                <View style={styles.container2}>
                    <View style={styles.userNameContainer}>
                        <View style={styles.whiteBox}>
                            <TextInput style={styles.inputText} placeholder='User Name' onChangeText={setUserName} value={userName}/>
                        </View>
                    </View>

                    <View style={styles.userNameContainer}>
                        <View style={styles.whiteBox}>
                        <TextInput style={styles.inputText} secureTextEntry={true} placeholder='Password' onChangeText={setPassword} value={password}/>
                        </View>
                    </View>
                </View>
                <View style={styles.container3}>
                    <View style={styles.LoginContainer}>
                        <TouchableOpacity>
                            <View style={styles.loginButton}>
                                <Text style={styles.loginButtonText}><Link href='../dashboard/dashboard'>LOGIN</Link></Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.registerContainer}>
                        <TouchableOpacity>
                            <Text style={styles.register}><Link href='../createaccount/register'>Register</Link></Text>
                            <View style={styles.touchRegister}></View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.forgetPassword} ><Link href ='../forgetPassword/forgetpassword'>Forget Password?</Link></Text>
                            <View style={styles.touchForgetPassword}></View>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
    )
}
export default loginpage;


