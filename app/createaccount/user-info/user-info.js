import React from "react";
import {View,SafeAreaView,Text,Image,TouchableOpacity} from 'react-native'
import { Link } from "expo-router";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import styles from './user-info.style'

const UserInfo=()=>{

    return(
        <View style={{flex:1}}>
        <SafeAreaView style={styles.container}>

            <View style={styles.container1}>
                <View style={styles.container1_1}>
                    <TouchableOpacity style={styles.topHeaderArrowBackTouch}><Image style={styles.topHeaderBackArrow}source={require('../../../assets/ArrowBackTopLeft.png')}/></TouchableOpacity></View>
                
                <View style={styles.container1_2}>
                <Image style={styles.otpVerification} source={require('../../../assets/OtpVerification.png')}/>
                    </View>
            </View>
           

            <View style={styles.container2}>
                
            <TextInput style={styles.input}  textAlign="center"/>
            <TextInput style={styles.input}  textAlign="center"/>
            <TextInput style={styles.input}  textAlign="center"/>
            <TextInput style={styles.input}  textAlign="center"/>
                    
                
            </View>

            <View style={styles.container3}>
                
               <Link href='/otp-verification'> <Image source={require('../../../assets/ArrowBlackRight1x.png')}/></Link>
                
                

            </View>

        </SafeAreaView>
        </View>
    )
}

export default UserInfo;