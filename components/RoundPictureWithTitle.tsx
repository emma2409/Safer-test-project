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
        imgContainer:{
            // backgroundColor: "yellow",
            paddingLeft: 5,
            paddingRight: 5,
            justifyContent: 'center'
        },

        leftContainer:{
            // backgroundColor: "blue",
            justifyContent: 'center',
            padding: 5,
        },

        container: {
            flexDirection: 'row',
            marginBottom: 5
        },

        image:{
            width: props.imgSize,
            height: props.imgSize,
            borderRadius: props.imgSize / 2,

        }
    })
    return (
        <View style={[styles.container, props.styleBox]}>
            <View style={styles.imgContainer}>
                <Image
                    source={{ uri: props.imgLink }}
                    style={styles.image}
                />
            </View>

            <View style={styles.leftContainer}>
                {props.labels.map((item, index ) =>{
                    return(
                        <View>
                            <Text style={item.titleStyle} key={index}>
                                {item.title}
                            </Text>
                        </View>

                    )
                })}
            </View>

        </View>
    )
}

