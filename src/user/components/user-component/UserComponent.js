import React from 'react';
import{View, Text, Image} from 'react-native';
import Styles from './UserComponentStyles';

const UserComponent = (props) => {
    user = props.user;
    return (
        <View style={Styles.container}>
            <Image source={{uri: user.avatar}} style={{width:200, height:200}}/>
            <Text>{user.first_name}</Text>
            <Text>{user.email}</Text>
        </View>
    );
}

export default UserComponent;