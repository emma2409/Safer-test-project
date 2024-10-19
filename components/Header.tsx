import ContainerLayout from "@/components/layout-components/ContainerLayout";
import RoundPictureWithTitle from "@/components/RoundPictureWithTitle";
import {description, IMG_LINK, NAVIGATION_BUTTON_DATA} from "@/constants/common-constants";
import { Dimensions} from 'react-native';
import ListBtn from "@/components/ListBtn";
import {getPercentageSizeScreen} from "@/common-functions/functions";
import React from "react";

interface Props {
    heightPercentage: number
    bgColor?: string,
    paddingHorizontal ?: number,
    paddingVertical?: number
    selectedBtnTitle?: any
}

export default (props: Props) =>{
    const { width, height } = Dimensions.get('window');
    const [selectedBtnTitle, setSelectedBtnTitle] = React.useState("");

    return(
        <ContainerLayout
            height={getPercentageSizeScreen(height, props.heightPercentage)}
            bgColor={props.bgColor || "white"}
            paddingHorizontal={props.paddingHorizontal || 0}
            paddingVertical={props.paddingVertical || 0}
        >
            <RoundPictureWithTitle
                imgSize={80}
                imgLink={IMG_LINK}
                labels={[
                    {title: "General Practional ", titleStyle:{color: 'white', fontSize: 23, marginBottom: 5}},
                    {title: description, titleStyle:{color: 'lightgray', fontSize: 15, }}
                ]}
                styleBox={{backgroundColor: 'transparent' }}
            />

            <ListBtn
                buttonList={NAVIGATION_BUTTON_DATA}
                selectedBtnColor={"pink"}
                iconSize={60}
                onPressIcon={(value: any)  => {
                    setSelectedBtnTitle(value)
                    props.selectedBtnTitle(value)
                }
            }
            />
        </ContainerLayout>
    )
}