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
        marginBottom:0,
        alignSelf:'center',
      },
    loginButton:{
    backgroundColor: 'rgba(0, 71, 255, 0.49)',
    borderRadius: 20,
    height:60,
    width:200,
    marginBottom: 25,
    alignSelf:'center',
    },
    loginButtonText: {
        color: '#FFFFFF',
        fontSize: 48,
        textAlign: 'center',
        paddingBottom:35
      },
    
    register:{
          
         color: 'white', 
         fontSize: 20, 
         marginLeft:16,
        },
        
         forgetPassword:{
         color: 'black', 
         fontSize: 20, 
         marginLeft:25,

    },
    buttomViewContainer:{
    flexDirection: 'column',
    },
    touchRegister:{ 
    borderRadius: 15,
    height:30,
    width:100,
    margin: 0,
    backgroundColor: '#FF0000', 
    margin:10,
      
      },
  
    touchForgetPassword:{
    borderRadius: 15,
    height:30,
    width:200,
    margin:10,
    backgroundColor: 'rgba(0, 71, 255, 0.49)', 
        }
})

export default styles