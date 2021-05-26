import {StyleSheet, Dimensions} from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  iconcontainer2: {
    flex: 0.4,
      backgroundColor: "black",
      borderBottomLeftRadius: 80,
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 7,
  },
  title: {
    fontSize: 22,
        color: "white",
        position: "absolute",
        right: 30,
        bottom: 10
  },
  inputDataContainer: {
    flex: 2,
    flexDirection: "column",
    alignItems: "center"
    
  },
  inputDataUser:{
    width: Dimensions.get('screen').width*0.9,
    backgroundColor: "white",
    borderRadius: 20,
    marginTop:10,
    paddingLeft:20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  registerButton: {
    width:Dimensions.get("screen").width * 0.85,
    padding:20,
    borderRadius:50,
    marginTop:40,
    alignItems:"center"
  },
  textRegisterButton:{
    color: "white"

  }

});

export default Styles;
