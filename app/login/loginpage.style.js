import React from "react";
import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    container:{
        flex:3,
        backgroundColor:'#E9EBEE',
        fontSize:'1vh'
    },
    container1:{
      flex:1,
      backgroundColor:'#E9EBEE',
    },
    container2:{
    flex:1,
    backgroundColor:'#E9EBEE',
    display:'flex',
    justifyContent:'space-evenly',
    flexDirection:'column'
    },
    container3:{
      flex:1,
      backgroundColor:'#E9EBEE',
      display:'flex',
      justifyContent:'space-between'
    },
    imageStyle:{
         width: "100%",
         resizeMode:"stretch"
    },
    userNameContainer:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
    },
    whiteBox:{
      width: "80%",
      backgroundColor:"white",
      minHeight:"8vh",
      borderRadius:25,
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
    },
    inputText:{
      fontSize:'3em',
      textAlign:'center',
      border:'none'
    }
    // input:{
    //     alignContent:"center",
    //     height: 55,
    //     width:350,
    //     marginBottom:40,
    //     borderWidth: 1,
    //     paddingLeft: 10, 
    //     borderRadius: 18,
    //     backgroundColor:'white',
    //     alignSelf:'center',},

    // inputContainer: {
    //     width: '80%',
    //     marginTop: 80,
    //     marginBottom:0,
    //     alignSelf:'center',
    //   },
    ,
    // LoginContainer:{
    //   display:'flex';
    //   justifyContent:
    // }
    LoginContainer:{
      display:'flex',
      alignItems:'center',
      justifyContent:'center'
    },
    loginButton:{
    backgroundColor: 'rgba(0, 71, 255, 0.49)',
    borderRadius: 20,
    width:'fit-content',
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
    },
    loginButtonText: {
    color: '#FFFFFF',
    fontSize: '4em',
    textAlign: 'center',
    paddingLeft:25,
    paddingRight:25,
    },
    registerContainer:{
      display:'flex',
      flexDirection:'column',
      justifyContent:'flex-end',
      alignItems:'flex-end',
      marginBottom:'5vw',
      marginRight:'5vw'
    },
    register:{
        color: 'black', 
         fontSize: 20, 
        },
         forgetPassword:{
         color: 'black', 
         fontSize: 20, 
    },
    
    touchRegister:{ 
      borderRadius: 15,
      height:10,
      width:'100%',
      backgroundColor: '#FF0000', 
    },
  
    touchForgetPassword:{
      borderRadius: 15,
      height:10,
      width:'100%',
      backgroundColor: 'rgba(0, 71, 255, 0.49)', 
    }
})

export default styles