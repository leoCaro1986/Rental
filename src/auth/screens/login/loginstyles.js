import {StyleSheet, Dimensions} from 'react-native';

const Styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column'
    },
    iconContainer: {
      flex: 1,
      backgroundColor: "black",
      borderBottomLeftRadius: 100,
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 20 
    },
    title: {
        fontSize: 22,
        color: "white",
        position: "absolute",
        right: 30,
        bottom: 30
    },
    inputDataContainer: {
      flex: 2,
      flexDirection: "column",
      alignItems: "center",
      
    },
    inputDataUser:{
      width: Dimensions.get('screen').width*0.9,
      backgroundColor: "white",
      borderRadius: 20,
      marginTop:20,
      paddingLeft:30,
      shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
    },
    loginButton: {
      width: Dimensions.get("screen").width*0.60,
      padding: 15,
      borderRadius: 20,
      marginTop: 30,
      alignItems: "center",
    },
    textLoginButton: {
      color: "white"
    }
  });

export default Styles;