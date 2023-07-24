import React from "react";
import {View,SafeAreaView,Text,Image,TouchableOpacity,StatusBar} from 'react-native'
import { Link } from "expo-router";
import { ScrollView, TextInput } from "react-native-gesture-handler";

const rightArrow=require('../../../assets/logos/ArrowRightSmall.png')
const leftArrow=require('../../../assets/logos/ArrowLeftSmall.png')
const detailsImage=require('../../../assets/logos/Details.png')
import styles from './user-info.style'

const UserInfo=()=>{

    return(
        <View style={{flex:1}}>
        <SafeAreaView style={styles.container}>
        <StatusBar  backgroundColor="#f0f0f0" barStyle="dark-content"/>

            <View style={styles.container1}>
                <View style={styles.container1_1}>
                <Link href={'../otp-verification-register-page/otp-verification'} >.
                    <Image style={styles.leftArrowImage} source={leftArrow}/>
                </Link>
                </View>
                
                <View style={styles.container1_2}>
                <Image style={styles.details} source={detailsImage}/>
                    </View>
            </View>
           

            <View style={styles.container2}>
                
            <TextInput style={styles.input}  textAlign="center"/>
            <TextInput style={styles.input}  textAlign="center"/>
            <TextInput style={styles.input}  textAlign="center"/>
            <TextInput style={styles.input}  textAlign="center"/>
                    
                
            </View>

            <View style={styles.container3}>
                
               <Link href='/otp-verification'> <Image source={rightArrow}/></Link>
                
                

            </View>

        </SafeAreaView>
        </View>
    )
}

export default UserInfo;