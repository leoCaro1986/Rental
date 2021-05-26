import React, {useState} from 'react';
import {View, Text, Image, StatusBar, TextInput, Button, TouchableOpacity, Alert} from 'react-native';
import Styles from './registerStyles';
import Colors from '../../../shared/colors/colors';


const registerUserScreen = ({navigation}) => {
    const[nombre, setNombre] = useState("");
    const[apellido, setApellido] = useState("");
    const[email, setEmail] = useState("");
    const[pais, setPais] = useState("");
    const[ciudad, setCiudad] = useState("");
    const[password, setPassword] = useState("");
    const validateRegister = () => {
        if (nombre === "" || apellido === "" || email === "" || pais === "" || ciudad === "" || password === ""){
            Alert.alert("Digite todos los campos");
        }
        else{
        setNombre("");
        setApellido("");
        setEmail("");
        setPais("");
        setCiudad("");
        setPassword("");
        navigation.navigate("listProperty");
      }
      }
    return (
        <View style={Styles.container}>
            <StatusBar backgroundColor={Colors.primarycolor}></StatusBar>
            <View style={Styles.iconcontainer2}>
                <Image source={require('./img/rental-logo.png')} />
                <Text style={Styles.title}>Registro</Text>
            </View>
            <View style={Styles.inputDataContainer}>
                <TextInput inlineImageLeft="outline_perm_identity_black_24" inlineImagePadding={10} style={Styles.inputDataUser} defaultValue={nombre} placeholder="Nombre" onChangeText={(text)=>{setNombre(text)}}></TextInput>
                <TextInput inlineImageLeft="outline_perm_identity_black_24" inlineImagePadding={10} style={Styles.inputDataUser} defaultValue={apellido} placeholder="Apellido"onChangeText={(text)=>{setApellido(text)}}></TextInput>
                <TextInput inlineImageLeft="outline_mail_black_24" inlineImagePadding={10} keyboardType="email-address" style={Styles.inputDataUser} defaultValue={email} placeholder="Email" onChangeText={(text)=>{setEmail(text)}}></TextInput>
                <TextInput inlineImageLeft="outline_flag_black_24" inlineImagePadding={10} style={Styles.inputDataUser} defaultValue={pais} placeholder="Pais" onChangeText={(text)=>{setPais(text)}}></TextInput>
                <TextInput inlineImageLeft="outline_location_city_black_24" inlineImagePadding={10} style={Styles.inputDataUser} defaultValue={ciudad} placeholder="Ciudad" onChangeText={(text)=>{setCiudad(text)}}></TextInput>
                <TextInput inlineImageLeft="outline_vpn_key_black_24" inlineImagePadding={10} secureTextEntry={true} style={Styles.inputDataUser} defaultValue={password} placeholder="Password" onChangeText={(text)=>{setPassword(text)}}></TextInput>
                <Text>Hola</Text>
                
                <TouchableOpacity onPress={() => validateRegister()} >
                    <View style={Styles.registerButton}  backgroundColor="#5281B7" >
                        <Text style={Styles.textRegisterButton}>Enviar</Text>
                    </View>
                </TouchableOpacity>             
            </View>
        </View>
    );
}
export default registerUserScreen;