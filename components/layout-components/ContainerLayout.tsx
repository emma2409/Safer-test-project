import {StyleSheet, View} from "react-native";
import React from "react";

interface Props{
    children:React.ReactNode;
    paddingHorizontal?: number;
    paddingVertical?: number;
    height?: number,
    bgColor?: string,
}
export default (props: Props) =>{
    const styles = StyleSheet.create({
        container:{
            height: props.height,
            paddingVertical: props.paddingVertical || 0,
            paddingHorizontal: props.paddingHorizontal || 0,
            backgroundColor: props.bgColor || "white",
        }
    })

    return(
        <View style={styles.container}>
            {props.children}
        </View>
    )
}