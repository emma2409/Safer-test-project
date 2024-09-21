import {StyleSheet, Text, View} from "react-native";

export default () =>{
    const styles = StyleSheet.create({
        container:{
            backgroundColor: 'red',
            height:"100%"
        }
    })

    return(
        <View style={styles.container}>
            <Text>Slot screen</Text>
        </View>
    )
}