import {Text, View, StyleSheet} from "react-native";

export default () =>{
    const styles = StyleSheet.create({
        container:{
            backgroundColor: 'yellow',
            height:"100%"
        }
    })

    return(
        <View style={styles.container}>
            <Text>Cost screen</Text>
        </View>
    )
}