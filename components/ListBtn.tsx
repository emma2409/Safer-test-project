import {StyleSheet, ScrollView} from "react-native";
import {NavigationBtnType} from "@/constants/common-constants";
import NavigationBtn from "@/components/NavigationBtn";
import {useState} from "react";

interface Props {
    buttonList: NavigationBtnType[]
    iconSize?: number
    marginTop?: number
    marginBottom?: number
    selectedBtnColor: string
    onPressIcon?: any
}

export default (props: Props) =>{
    const [selectedNavigationBtnIndex, setSelectedNavigationBtnIndex] = useState(-1)

    const onClickNavigationBtn = (index: number, itemTitle: string) => {
        setSelectedNavigationBtnIndex(index)
        props.onPressIcon(itemTitle)
    }

    const styles = StyleSheet.create({
        container:{
            flexDirection: 'row',
            marginTop: props.marginTop || 0,
            marginBottom: props.marginBottom || 0,
            paddingVertical: 5

        }
    })

    return(
        <ScrollView
            style={styles.container}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        >
            {props.buttonList.map((item, index) =>{
                return(
                    <NavigationBtn
                        iconBoxSize={props.iconSize || 30}
                        iconBgColor={"gray"}
                        boxSize={100}
                        title={item.title}
                        onPress={() =>onClickNavigationBtn(index, item.title)}
                        isSelected={selectedNavigationBtnIndex === index}
                        selectedColor={props.selectedBtnColor}
                    />
                )
            })}
        </ScrollView>
    )
}