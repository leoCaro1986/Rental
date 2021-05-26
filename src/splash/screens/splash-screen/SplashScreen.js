import React, {useEffect} from 'react';
import {View, Text, Image, StatusBar, ActivityIndicator, TextInput, Button, TouchableOpacity, Alert} from 'react-native';
import Colors from '../../../shared/colors/colors';
import Styles from './SplashStyle';


const SplashScreen =({navigation}) =>{
    const waittingTimesSplash = () =>{
        setTimeout(() =>{
            navigation.navigate('login');
        }, 3000);
    }
    useEffect(() =>{
        waittingTimesSplash();
    }, []);
    return <View style={Styles.container}>
        <StatusBar backgroundColor={Colors.primarycolor}></StatusBar>
        <Image source={require('./img/rental-logo.png')} />
        <ActivityIndicator size="large" color="Yellow"></ActivityIndicator>
        <Text style={Styles.title}>Bienvenido</Text>
    </View>
}

export default SplashScreen;