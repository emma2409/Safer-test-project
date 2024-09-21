import {SafeAreaView, StyleSheet, StatusBar, View, FlatList} from "react-native";
import RoundPictureWithTitle from "@/components/RoundPictureWithTitle";
import ContainerLayout from "@/components/layout-components/ContainerLayout";
import {getPercentageSizeScreen, screenSize} from "@/common-functions/functions-tsx";
import NavigationBox from "@/components/NavigationBox";
import Icon from 'react-native-vector-icons/Ionicons';
import {NAVIGATION_BOX_DATA, NavigationBoxType} from "@/constants/common-constants";


const IMG_LINK: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQQhAnK3Uek8qfMxM_Y6hlBfshp0NDCUNCEg&s"


export default () =>{


    return(
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content"/>

            <ContainerLayout
                height={getPercentageSizeScreen(screenSize['height'], 80)}
                bgColor={"black"}
                paddingHorizontal={5}
                paddingVertical={15}
            >
                <RoundPictureWithTitle
                    imgSize={100}
                    imgLink={IMG_LINK}
                    labels={[
                        {title: "Hello Dieuveille", titleStyle:{color: 'white', fontSize: 23, marginBottom: 5}},
                        {title: "Cape Town, Kenilworth", titleStyle:{color: 'lightgray', fontSize: 15, }}
                    ]}
                    styleBox={{backgroundColor: 'transparent', }}
                />

                <FlatList
                    data={NAVIGATION_BOX_DATA}
                    renderItem={({item}) =>
                        <NavigationBox
                            icon={item.icon}
                            iconBoxSize={70}
                            iconBgColor={"gray"}
                            boxSize={100}
                            title={item.title}
                            onPress={() =>alert(item.link)}
                        />
                    }
                    horizontal={true} // This makes the list scroll horizontally
                />

            </ContainerLayout>





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