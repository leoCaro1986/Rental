import {StyleSheet, Dimensions} from 'react-native';


const Styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    iconContainer: {
        flex: 0.4,
        backgroundColor: "black",
        borderBottomLeftRadius: 80,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 7
    },
    title: {
        fontSize: 22,
        color: "white",
        position: "absolute",
        right: 30,
        bottom: 10
      },
    card: {
        alignItems: "center",
        justifyContent: "center",
        bottom: 2,
        borderColor: "black",

    },
    imagenMed: {
        width: 300,
        height: 150,
        alignItems: "center",
        justifyContent: "center",
        bottom: 2
    },
    titleP: {
        fontSize: 25,
        color: "black",
        position: "absolute",
        right: 30,
        bottom: -28
      },






});     
export default Styles;