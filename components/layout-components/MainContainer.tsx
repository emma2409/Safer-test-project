import {SafeAreaView, StatusBar, StyleSheet} from "react-native";
import React from "react";

interface Props {
    children: React.ReactNode;
}
export default (props: Props) =>{
    const styles = StyleSheet.create({
        container:{
            paddingTop: StatusBar.currentHeight,
            color: 'blue',
            fontSize: 50,
        }
    })

    return(
        <SafeAreaView style={styles.container}>
            {props.children}
        </SafeAreaView>
    )
}
