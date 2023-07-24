import React from "react";
import {StyleSheet} from 'react-native'

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFFFFF',
        marginTop:41, 
    },
    container1:{
    flex: 1,
    justifyContent:'center',
},
    container2:{
        flex:1,
        justifyContent:"space-evenly",
      alignItems:'center',
    },

    container3:{
        flex: 1,
        display:'flex',
        alignItems:'center',
    },
    container1_1:{
        flex: 1,
        paddingLeft:10 , 
        display: "flex",
        justifyContent: "center",

    },
    leftArrowImage:{
        resizeMode: 'contain'

    },
    container1_2:{
        flex: 6,
        alignItems:'center',
    },
    input:{
        backgroundColor:'rgba(217, 217, 217, 0.5)',
        height:55,
        width:350,
        borderRadius:5,

        alignSelf:'center',
        borderColor:'black',

        borderTopWidth:1,
        borderLeftWidth:1,
        borderRightWidth:1,
        borderBottomWidth:3,
        marginLeft:15,
        marginRight:15
    },
   
    details:{
        resizeMode:'contain',
        alignItems:'center'
    },
    
    registerButton:{
        
        alignSelf:'center',
        backgroundColor:'rgba(0,0,0,0.5)',
        alignContent:'center',
        height:50,
        width:90,
        

    },
})
export default styles