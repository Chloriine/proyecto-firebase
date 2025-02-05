import { StyleSheet } from "react-native"


export const GlobalStyles = StyleSheet.create({
    containerLogin: {
        flex: 1,
    },
    titulo: {
        fontSize: 22,
        textAlign: 'center',
    },
    textInput:{
        fontSize: 15,
        textAlign: 'left'
    },
    containerFormularioLogin:{
        flexDirection: 'column',
    },
    containerBotonesLogin:{
        flexDirection: 'row',
        gap: 10,
    },
    boton:{
        backgroundColor: 'blue',
        width: '50%',
    },
    textBoton:{
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
        justifyContent: 'center',
    },
})
