import React from "react";
import { Text, StyleSheet, View, Alert, Button, TextInput, TouchableOpacity } from "react-native";

function Buttons(){

    const buttons = ['AC', 'DEL', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '3', '2', '1', '+', '0', '.', '+/-', '=']

    return(
        <View style={styles.buttons}>
            {buttons.map((button) => 
            <TouchableOpacity key={button} style={styles.button}>
                <Text style={styles.textButton}>{button}</Text>
            </TouchableOpacity>)}
        </View>
    )
}

const styles = StyleSheet.create({
    buttons:{
        flexDirection: 'row',
        flexWrap: 'wrap',
    },

    button:{
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        minHeight: 90,
        minWidth: 90,
    },

    textButton:{
        color: 'grey',
        fontSize: 25,
    }

})

export default Buttons
