import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import GeneralButton from "@/components/GeneralButton";

interface Props {
    data: string[]
}

export default (props: Props) =>{
    const styles = StyleSheet.create({
        btnLineContainer:{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginBottom: 10
        },

        container:{
            backgroundColor: "lightblue",
            height: 100,
            marginBottom: 55
        }
    })
    const RenderBox = (item: string, index: number) =>{
        return(
            <TouchableOpacity style={styles.container} key={index}>
                <Text>{item}</Text>
            </TouchableOpacity>
        )
    }
    return(
        <View>
            <View style={styles.btnLineContainer}>
                <GeneralButton
                    bgColor={"blue"}
                    title={"New"}
                    titleColor={"white"}
                    onPress={() =>alert("coming soon")}
                />
            </View>
            {props.data.map((item, index) =>{
                return(
                    <>{RenderBox(item, index)}</>
                )
            })}
        </View>
    )
}