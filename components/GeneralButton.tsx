import {TouchableOpacity, Text, StyleSheet, Dimensions} from "react-native";
interface Props{
    bgColor: string,
    title: string,
    titleColor: string,
    onPress: any
}

export default (props: Props) =>{
    const {width, height} = Dimensions.get('window');

    const styles = StyleSheet.create({
        title:{
            color: props.titleColor,
            fontSize: 14
        },

        container:{
            backgroundColor: props.bgColor,
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 10,
            paddingBottom: 10,
            width:( width / 2) - 50,
            borderRadius: 10
        }
    })
    return(
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
            <Text style={styles.title}>{props.title}</Text>
        </TouchableOpacity>
    )
}