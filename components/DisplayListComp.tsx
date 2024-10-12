import {ScrollView, View} from "react-native";
import {
    COST_DATA, COST_SCREEN,
    GALLERY_DATA,
    GALLERY_SCREEN,
    LOCATION_DATA,
    LOCATION_SCREEN,
    SLOT_DATA, SLOT_SCREEN
} from "@/constants/common-constants";
import SmallBox from "@/components/SmallBox";
import GeneralButton from "@/components/GeneralButton";
import { useNavigation } from 'expo-router';
import {useEffect, useState} from "react";
import {GalleryType} from "@/types/general-types";
import {IMG_5} from "@/constants/image-constants";
import GalleryGrid from "@/components/GalleryGrid";

interface Props{
    selectedListName: string
}

const LOCATION_LIST = "Location"
const GALLERY_LIST = "Gallery"
const COST_LIST = "Cost"
const FORMS_LIST = "Form"
const SLOTS_LIST = "Slot"


export default (props: Props) =>{
    const navigation = useNavigation();
    const [screenName, setScreenName] = useState("")

    const goTo = (screen: string) =>{
        navigation.navigate(screen as never)
    }
    const getScreenName = (selectedListName: string): string =>{
        switch(selectedListName){
            case LOCATION_LIST:
                return LOCATION_SCREEN
            case GALLERY_LIST:
                return GALLERY_SCREEN
            case COST_LIST:
                return COST_SCREEN
            case SLOTS_LIST:
                return SLOT_SCREEN
        }
        return  ""
    }
    useEffect(() => {
        setScreenName(getScreenName(props.selectedListName));
    });

    const switchRenderList = (selectedListName: string) =>{
        switch(selectedListName){
            case LOCATION_LIST:
                return (
                    <>
                        {LOCATION_DATA.map((item, index) =>{
                            return(
                                <SmallBox
                                    rows={[
                                        {key: "Subscription Code", value: item.SubscriptionCode},
                                        {key: "Latitude", value: item.Latitude},
                                        {key: "Longitude", value: item.Longitude},
                                    ]}
                                />
                            )
                        })}
                    </>
                )

            case GALLERY_LIST:
                let imgLinks: string[] = []
                for (let i = 0; i < GALLERY_DATA.length; i++){
                    const galleryItem: GalleryType = GALLERY_DATA[i]
                    imgLinks.push(galleryItem.ImgUrl)
                }
                return (
                    <GalleryGrid
                        imageData={imgLinks}
                        itemPerRow={3}
                    />
                )


            case COST_LIST:
                return (
                    <>
                        {COST_DATA.map((item, index) =>{
                            return(
                                <SmallBox
                                    rows={[
                                        {key: "Subscription Code", value: item.SubscriptionCode},
                                        {key: "Cost amount", value: item.CostAmount},
                                    ]}
                                />
                            )
                        })}
                    </>
                )


            case SLOTS_LIST:
                return (
                    <>
                        {SLOT_DATA.map((item, index) =>{
                            return(
                                <SmallBox
                                    rows={[
                                        {key: "Subscription Code", value: item.SubscriptionCode},
                                        {key: "From", value: item.From},
                                        {key: "To", value: item.To},
                                        {key: "Day", value: item.Day},

                                    ]}
                                />
                            )
                        })}
                    </>
                )


        }
    }

    return(
        <View style={{paddingTop: 5, paddingHorizontal: 5}}>
            <View style={{flexDirection: 'row', justifyContent: "flex-end"}}>
                {props.selectedListName &&
                    <GeneralButton
                        bgColor={"lightblue"}
                        title={"New"}
                        titleColor={"white"}
                        onPress={() =>  goTo(screenName)}
                    />
                }

            </View>

            <View style={{marginTop: 5}}>
                {switchRenderList(props.selectedListName)}
            </View>

        </View>
    )
}