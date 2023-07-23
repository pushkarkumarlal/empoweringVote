import {React,useState} from "react";
import {View,SafeAreaView,Text,Image,TouchableOpacity} from 'react-native'
import { Link } from "expo-router";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import styles from './phonenum.style'


const PhoneNumber=()=>{

const [phoneNumber,setPhoneNumber]=useState("");

const [areaCode,setAreaCode]=useState("");

    return(
        <View style={{flex:1}}>
        <SafeAreaView style={styles.container}>

            <View style={styles.container1}>
                <View style={styles.container1_1}>
                    <TouchableOpacity style={styles.topHeaderArrowBackTouch}><Image style={styles.topHeaderBackArrow}source={require('../../../assets/ArrowBackTopLeft.png')}/></TouchableOpacity></View>
                
                <View style={styles.container1_2}>
                <Image style={styles.createAccountImage} source={require('../../../assets/CreateAccount.png')}/>
                    </View>
            </View>
           

            <View style={styles.container2}>
                <View>
                    <TextInput style={styles.input} placeholder="Mobile Number" textAlign="center"></TextInput>
                    <TextInput style={styles.input} placeholder="Country Code" textAlign="center">
                    </TextInput>
                
                </View>
            </View>

            <View style={styles.container3}>
                
               <Link href='../otp-verification-register-page/otp-verification'> <Image source={require('../../../assets/ArrowBlackRight1x.png')}/></Link>
                
                

            </View>

        </SafeAreaView>
        </View>
    )
}

export default PhoneNumber;