import {StyleSheet, TextStyle, View, Text, ViewStyle} from "react-native";
interface RowType {
    key: any,
    value: any,
    keyStyle?: TextStyle,
    valueStyle?: TextStyle,
}
interface Props {
    rows: RowType[]
    styleBox?: ViewStyle
}


export default (props: Props) =>{
    const styles = StyleSheet.create({
        innerContainer:{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 3
        },

        container:{
            minHeight: 100,
            borderStyle: 'solid',
            borderWidth: 1,
            borderColor: 'lightgray',
            backgroundColor: 'white',
            borderRadius: 5,
            marginTop: 5,
            padding: 5,

            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
            // Shadow for Android
            elevation: 5,
        },


    })
    return(
        <View style={[styles.container, props.styleBox]}>
            {props.rows.map((rowItem, index) =>{
                return(
                    <View style={styles.innerContainer}>
                        <Text>{rowItem.key}</Text>
                        <Text>{rowItem.value}</Text>
                    </View>
                )
            })}
        </View>
    )
}