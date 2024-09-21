import {Text, SafeAreaView, StyleSheet, StatusBar} from "react-native";

export default () =>{
    return(
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content"/>
            <Text>Hello world</Text>
            <Text>Hello world</Text>
            <Text>Hello world</Text>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container:{
        paddingTop: StatusBar.currentHeight,
        flex: 1,
    }
})