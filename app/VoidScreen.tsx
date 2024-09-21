import {StyleSheet, View, Text} from "react-native";

export default () =>{
    const styles = StyleSheet.create({
        container:{
            backgroundColor: 'lightgreen',
            height: "100%"
        }
    })

    return(
        <View style={styles.container}>
            <Text style={{color: "yellow"}}>void screen</Text>
        </View>
    )
}