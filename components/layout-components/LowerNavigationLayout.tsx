import {View, StyleSheet} from "react-native";
import React from "react";

interface Props  {
    children: React.ReactNode;
}

export default(props: Props) =>{
    const styles = StyleSheet.create({
        container:{
            // backgroundColor: 'lightblue',
            height: "60%"
        }
    })

    return(
        <View style={styles.container}>
            {props.children}
        </View>
    )
}