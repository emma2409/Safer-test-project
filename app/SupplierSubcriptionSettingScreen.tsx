import MainContainer from "@/components/layout-components/MainContainer";
import Header from "@/components/Header";
import LowerContainerContent from "@/components/LowerContainerContent";
import React from "react";
import {Dimensions, ScrollView, Text} from "react-native";
import {getPercentageSizeScreen} from "@/common-functions/functions";

const { width, height } = Dimensions.get('window');

export default () =>{
    // Use states
    const [selectedButtonTitle, setSelectedButtonTitle] = React.useState<string>("");
    const lowerComponentHeight = getPercentageSizeScreen(height, 60)
    return(

        <MainContainer>
            <Header
                heightPercentage={35}
                bgColor={"black"}
                paddingHorizontal={5}
                paddingVertical={5}
                selectedBtnTitle={setSelectedButtonTitle}
            />

            <ScrollView style={{height: lowerComponentHeight}}>
                <LowerContainerContent
                    selectedListName={selectedButtonTitle}
                />

            </ScrollView>


        </MainContainer>


    )
}


