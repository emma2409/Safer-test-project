import {StyleSheet, Text, View} from "react-native";

export default () =>{
    const styles = StyleSheet.create({
        container:{
            backgroundColor: 'green',
            height:"100%"
        }
    })
    return(
        <View style={styles.container}>
            <Text>Forms Screen</Text>
        </View>
    )
}