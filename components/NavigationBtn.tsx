import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
// import Icon from 'react-native-vector-icons/FontAwesome';
import React from "react";

interface Props{
    iconBoxSize: number;
    iconBgColor: string;
    iconName: string,
    boxSize: number;
    title: string;
    key?: number
    onPress?: any
    isSelected?: boolean,
    selectedColor?: string
}

export default (props: Props) =>{
    const styles = StyleSheet.create({
        title:{
            color: props.isSelected ? props.selectedColor : 'white',
            fontSize: 15
        },

        titleContainer:{
            marginTop: 15,
            marginBottom: 10,
        },

        iconContainer:{
            height: props.iconBoxSize,
            width: props.iconBoxSize,
            borderRadius: props.iconBoxSize / 2,
            backgroundColor: props.isSelected ? props.selectedColor: props.iconBgColor,
            justifyContent: 'center',
            alignItems:'center'
        },
        container:{
            justifyContent: 'center',
            alignItems: 'center',
            width: props.boxSize,
            padding: 5
        }
    })

    return(
        <View style={styles.container} key={props.key}>
            <TouchableOpacity style={styles.iconContainer} onPress={props.onPress}>
                <Icon name={props.iconName} size={30} color="white" />
            </TouchableOpacity>

            <View style={styles.titleContainer}>
                <Text style={styles.title}>
                    {props.title}
                </Text>
            </View>

        </View>
    )
}