import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import Styles from './ListUserStyle';
import UserService from '../../services/UserService';
import UserComponent from '../../components/user-component/UserComponent';

const ListUserScreen = () => {
    const [users, setUsers] = useState([]);
    const getUsers = async () => {
        const users = await UserService.getUsers();
        console.log(users);
        setUsers(users);
    }

    useEffect(() => {
        getUsers();
    },[]);

    return <View style={Styles.container}>
        <FlatList data={users} renderItem={({ item, index }) => <TouchableOpacity onPress={() => UsersService.getUser(item.id)}>
            <UserComponent id={item.id} user={item} position={index}></UserComponent>
        </TouchableOpacity>}>
        </FlatList>
    </View>
}

export default ListUserScreen;