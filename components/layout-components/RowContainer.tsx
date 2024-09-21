import {StyleSheet, View} from "react-native";
import React from "react";

interface Props {
    children: React.ReactNode;
    marginVertical?: number;
    marginHorizontal?: number;
    paddingHorizontal?: number;
    paddingVertical?: number;
}

export default (props: Props) =>{
    const styles = StyleSheet.create({
        container:{
            marginHorizontal: props.marginHorizontal,
            marginVertical: props.marginVertical,
            paddingHorizontal: props.paddingHorizontal,
            paddingVertical: props.paddingVertical,
        }
    })

    return(
        <View style={styles.container}>
            {props.children}
        </View>
    )
}