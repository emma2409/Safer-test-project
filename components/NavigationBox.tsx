import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import React from "react";

interface Props{
    icon: React.ReactNode;
    iconBoxSize: number;
    iconBgColor?: string;
    boxSize: number;
    title: string;
    key?: number
    onPress?: any
}

export default (props: Props) =>{
    const styles = StyleSheet.create({
        title:{
            color: 'white',
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
            backgroundColor: props.iconBgColor || "white",
            justifyContent: 'center',
            alignItems:'center'
        },
        container:{
            // backgroundColor: 'lightgray',
            justifyContent: 'center',
            alignItems: 'center',
            width: props.boxSize,
            padding: 5
        }
    })

    return(
        <View style={styles.container} key={props.key}>
            <TouchableOpacity style={styles.iconContainer} onPress={props.onPress}>
                {props.icon}
            </TouchableOpacity>

            <View style={styles.titleContainer}>
                <Text style={styles.title}>
                    {props.title}
                </Text>
            </View>

        </View>
    )
}