import React from 'react';
import {View, Text, Image, StatusBar, TextInput, Button, TouchableOpacity, Alert} from 'react-native';
import Styles from './listPropertyStyle';
import Colors from '../../../shared/colors/colors';
import PropertyService from '../services/PropertyService';

const listPropertyScreen = () => {

    const listProperty = () => {
        const [Property, setProperty] = useState([]);
        
        const getProperty = async () => {
            const Property = await PropertyService.getProperty();
            console.log(Property);
            setProperty(Property);
        }
    }
        useEffect(() => {
            getProperty();
        },[]);

    return <View style={Styles.container}>
                <StatusBar backgroundColor={Colors.primarycolor}></StatusBar>
                <View style={Styles.iconContainer}>
                    <Image source={require('./img/rental-logo.png')} />
                    <Text style={Styles.title}>Propiedades</Text>
                </View>
                <View style={Styles.card}>
                    <Image style={Styles.imagenMed} source={require('./img/turismo-medellin.jpg')} />
                    <Text style={Styles.titleP}>Medellin</Text>
                </View>
            </View>



}
export default listPropertyScreen;