import {SafeAreaView, StyleSheet, StatusBar, Text, FlatList} from "react-native";
import RoundPictureWithTitle from "@/components/RoundPictureWithTitle";
import ContainerLayout from "@/components/layout-components/ContainerLayout";
import {getPercentageSizeScreen, screenSize} from "@/common-functions/functions-tsx";
import NavigationBox from "@/components/NavigationBox";
import {
    COST_SCREEN,
    FORMS_SCREEN,
    GALLERY_SCREEN,
    LOCATION_SCREEN,
    NAVIGATION_BOX_DATA, SLOT_SCREEN
} from "@/constants/common-constants";
import {useState} from "react";
import RowContainer from "@/components/layout-components/RowContainer";
import LowerNavigationLayout from "@/components/layout-components/LowerNavigationLayout";
import LocationScreen from "@/app/LocationScreen";
import GalleryScreen from "@/app/GalleryScreen";
import CostScreen from "@/app/CostScreen";
import FormsScreen from "@/app/FormsScreen";
import SlotScreen from "@/app/SlotScreen";


const IMG_LINK: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQQhAnK3Uek8qfMxM_Y6hlBfshp0NDCUNCEg&s"
const description = "A General Practitioner (GP) is a medical doctor who provides primary and continuing care for patients of all ages"
export default () =>{
    // Use states
    const [selectedNavigationBoxIndex, setSelectedNavigationBoxIndex] = useState<number>(-1)
    const [selectedNavigationScreen, setSelectedNavigationScreen] = useState<string>("")

    const onCLickNavigation = (title: string, index: number) =>{
        // alert(title)
        setSelectedNavigationBoxIndex(index)
        setSelectedNavigationScreen(title)
    }

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
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content"/>

            <ContainerLayout
                height={getPercentageSizeScreen(screenSize['height'], 35)}
                bgColor={"black"}
                paddingHorizontal={5}
                paddingVertical={15}
            >
                <RoundPictureWithTitle
                    imgSize={100}
                    imgLink={IMG_LINK}
                    labels={[
                        {title: "General Practional ", titleStyle:{color: 'white', fontSize: 23, marginBottom: 5}},
                        {title: description, titleStyle:{color: 'lightgray', fontSize: 15, }}
                    ]}
                    styleBox={{backgroundColor: 'transparent', }}
                />

                <RowContainer marginVertical={10}>
                    <FlatList
                        data={NAVIGATION_BOX_DATA}
                        renderItem={({item, index}) =>
                            <NavigationBox
                                icon={item.icon}
                                iconBoxSize={50}
                                iconBgColor={"gray"}
                                boxSize={100}
                                title={item.title}
                                onPress={() =>onCLickNavigation(item.title, index)}
                                isSelected={selectedNavigationBoxIndex === index}
                                selectedColor={"pink"}
                            />
                        }
                        horizontal={true} // This makes the list scroll horizontally
                    />
                </RowContainer>
            </ContainerLayout>

            <LowerNavigationLayout>
                {switchRender(selectedNavigationScreen)}
            </LowerNavigationLayout>


        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container:{
        paddingTop: StatusBar.currentHeight,
        color: 'blue',
        fontSize: 50,
    }
})