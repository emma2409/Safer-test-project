import {View, Text, StyleSheet} from "react-native";

export default () =>{
    const styles = StyleSheet.create({
        container:{
            backgroundColor: 'gray',
            height: "100%"
        }
    })
    return(
        <View style={styles.container}>
            <Text>Location screen</Text>
        </View>
    )
}