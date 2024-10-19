import {View, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions} from "react-native";
import {IMG_DATA} from "@/constants/image-constants";
import {getPercentageSizeScreen} from "@/common-functions/functions";

interface Props{
    imageData: string[]
    itemPerRow: number
}

const { width, height } = Dimensions.get('window');

export  default (props: Props) =>{
    const containerWidth  = getPercentageSizeScreen(80, width)
    let slicedNameList = []

    for (let i = 0; i < props.imageData.length; i+= props.itemPerRow) {
        slicedNameList.push(IMG_DATA.slice(i, i + props.itemPerRow))
    }
    const styles = StyleSheet.create({
        container:{

        },

        innerContainer:{
            height: 150,
            width: 150,
            marginRight: 5,
            marginBottom: 5,
        },

        imgContainer:{
            height: 150,
            width: 150
        }
    })

    return(
        <ScrollView style={styles.container}>
            {slicedNameList.map((row, index) => (
                <View style={{flexDirection: 'row', justifyContent: "flex-start"}}>
                    {row.map((imgLink, index) =>{
                        return(
                            <TouchableOpacity key={index} style={styles.innerContainer}>
                                <Image
                                    source={{ uri: imgLink}}
                                    style={styles.imgContainer}
                                />
                            </TouchableOpacity>

                        )
                    })}
                </View>
            ))}

        </ScrollView>
    )
}
