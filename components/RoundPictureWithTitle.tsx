import {View, Text, Image, StyleSheet, TextStyle, ViewStyle} from "react-native";


interface LabelProps {
    title: string;
    titleStyle: TextStyle;
}

interface Props {
    imgLink: string,
    labels: LabelProps[]
    styleBox?: ViewStyle
    imgSize: number
}

export default (props: Props)=> {
    const styles = StyleSheet.create({
        leftContainer:{
            justifyContent: 'center',
            padding: 10
        },

        container: {
            flexDirection: 'row',
            padding: 5,
            marginBottom: 5,
        },

        image:{
            width: props.imgSize,
            height: props.imgSize,
            borderRadius: props.imgSize / 2,

        }
    })
    return (
        <View style={[styles.container, props.styleBox]}>
            <Image
                source={{ uri: props.imgLink }}
                style={styles.image}
            />

            <View style={styles.leftContainer}>
                {props.labels.map((item, index ) =>{
                    return(
                        <Text style={item.titleStyle} key={index}>
                            {item.title}
                        </Text>
                    )
                })}
            </View>

        </View>
    )
}

