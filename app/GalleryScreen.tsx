import {StyleSheet, Text, View} from "react-native";

export default () =>{
    const styles = StyleSheet.create({
        container:{
            backgroundColor: 'blue',
            height:"100%"
        }
    })

    return(
        <View style={styles.container}>
            <Text>Gallery screen</Text>
        </View>
    )
}