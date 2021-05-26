import React, {useState} from 'react';
import {View, Text, Image, StatusBar, TextInput, Button, TouchableOpacity, Alert} from 'react-native';
import Styles from './loginstyles';
import Colors from '../../../shared/colors/colors';
const LoginScreen = ({navigation}) => {
  const register = () =>{
    navigation.navigate('register')  
  }
  
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const validateLogin =()=>{
    if(email===""|| password===""){
        Alert.alert("Digite todos los campos");
    }
    else{
    setEmail("");
    setPassword("");
    navigation.navigate("listUser");
    }
  }
  return <View style={Styles.container}>
    <StatusBar backgroundColor={Colors.primarycolor}></StatusBar>
    <View style={Styles.iconContainer}>
      <Image source={require('./img/rental-logo.png')} />
      <Text style={Styles.title}>Login</Text>
    </View>
    <View style={Styles.inputDataContainer}>
       <TextInput inlineImageLeft="outline_mail_black_24" defaultValue={email} keyboardType="email-address" inlineImagePadding={15} style={Styles.inputDataUser} onChangeText={(text)=>{setEmail(text)}} placeholder="Email"></TextInput>

       <Text>{email}</Text>

      <TextInput inlineImageLeft="outline_vpn_key_black_24" defaultValue={password} keyboardType="password" inlineImagePadding={15} style={Styles.inputDataUser} secureTextEntry={true} onChangeText={(text)=>{setPassword(text)}} placeholder="Password"></TextInput>
      
      <TouchableOpacity  onPress={()=> validateLogin()} >
      <View backgroundColor="#5281B7" style={Styles.loginButton} >
        <Text style={Styles.textLoginButton}>Login</Text>
      </View>
      </TouchableOpacity>
      <Button style={Styles.bottoncontainer} title="Registrate" onPress={()=>register()}></Button>
    </View>
  </View>
}
export default LoginScreen;