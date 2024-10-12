import {StyleSheet, Text, View} from "react-native";
import CameraComp from "@/components/CameraComp";

export default () =>{
    const styles = StyleSheet.create({
        container:{
            backgroundColor: 'blue',
            height:"100%"
        }
    })

    return(
        <View style={styles.container}>
            <CameraComp />
        </View>
    )
}