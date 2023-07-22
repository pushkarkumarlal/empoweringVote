import React from "react";
import {View,SafereaView,Text,Pressable} from 'react-native'
import {Link} from 'expo-router'

import Loginpage from './login/loginpage'
import Register from './createaccount/register-index'
import OtpVerification from "./createaccount/otp-verification-register-page/otp-verification";

const driver=()=>{
    return(
        <>
        <OtpVerification />
        
        </>
    )
}

export default driver;