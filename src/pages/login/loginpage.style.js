import React from "react";
import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#E9EBEE',
        paddingTop:45,
    },
    topDesignRed:{
         
         resizeMode:"stretch",
         width:435,
         height:260,
         
    },
    input:{
        alignContent:"center",
        height: 55,
        width:350,
        marginBottom:40,
        
        borderWidth: 1,
        paddingLeft: 10, 
        borderRadius: 18,
    backgroundColor:'white',
alignSelf:'center',},

    inputContainer: {
        width: '80%',
        marginTop: 80,
        marginBottom:30,
        alignSelf:'center',

      },


    loginButton:{
    backgroundColor: 'rgba(0, 71, 255, 0.49)',
    borderRadius: 15,
    height:60,
    width:200,
    marginTop: 0,
    alignSelf:'center',
    
    },
    loginButtonText: {
        color: '#FFFFFF',
        fontSize: 48,
        textAlign: 'center',
      },
    
    register:{
         position: 'relative', 
         color: 'black', 
         fontSize: 20, 
         fontWeight: 70,
         textAlign:'right',
        marginRight:20,},
         
         forgetPassword:{
         position: 'relative', 
         color: 'black', 
         fontSize: 20, 
         
         fontWeight: 70,
         textAlign:'right',
         marginRight:20,

    }
    ,blueLine:{ 
       
      marginLeft:1428, 
      width: 100,
      height: 9, 
      alignSelf:'right', 
      position: 'relative', 
      backgroundColor: 'rgba(0, 71, 255, 0.49)', 
      borderRadius: 11 },

      redLine:{
        marginLeft:1365, 
        width: 160,
        height: 9, 
        alignSelf:'right', 
        position: 'relative', 
        backgroundColor: '#FF0000', 
        borderRadius: 11 }
})

export default styles