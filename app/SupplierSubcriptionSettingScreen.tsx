import {
    COST_SCREEN, description,
    FORMS_SCREEN,
    GALLERY_SCREEN, IMG_LINK,
    LOCATION_SCREEN,
    SLOT_SCREEN
} from "@/constants/common-constants";
import LocationScreen from "@/app/LocationScreen";
import GalleryScreen from "@/app/GalleryScreen";
import CostScreen from "@/app/CostScreen";
import FormsScreen from "@/app/FormsScreen";
import SlotScreen from "@/app/SlotScreen";
import MainContainer from "@/components/layout-components/MainContainer";
import Header from "@/components/Header";
import LowerContainerContent from "@/components/LowerContainerContent";
import React from "react";
import {Text} from "react-native";


export default () =>{
    // Use states
    const [selectedButtonTitle, setSelectedButtonTitle] = React.useState<string>("");

    // SWITCH RENDER FUNCTION
    const switchRender = (screenName: string) =>{
        switch(screenName){
            case LOCATION_SCREEN:
                return <LocationScreen />
            case GALLERY_SCREEN:
                return <GalleryScreen />
            case COST_SCREEN:
                return <CostScreen />

            case FORMS_SCREEN:
                return <FormsScreen />

            case SLOT_SCREEN:
                return <SlotScreen />

        }
    }

    return(
        <MainContainer>
            <Header
                heightPercentage={40}
                bgColor={"black"}
                paddingHorizontal={5}
                paddingVertical={5}
                selectedBtnTitle={setSelectedButtonTitle}
            />

            <LowerContainerContent
                selectedListName={selectedButtonTitle}
            />

        </MainContainer>


    )
}


