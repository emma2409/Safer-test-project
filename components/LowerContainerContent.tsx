import {StyleSheet, ScrollView} from "react-native";
import ListItems from "@/components/ListItems";

const LOCATION_LIST = "Location"
const GALLERY_LIST = "Gallery"
const COST_LIST = "Cost"
const FORMS_LIST = "Form"
const SLOTS_LIST = "Slot"

interface Props {
    selectedListName: string,
}

export default (props: Props) =>{
    //
    const locations = ["location 1", "location 2", "location 3"]
    const gallery = ["Gallery 1", "Gallery 2", "Gallery 3"]
    const costs = ["cost 1", "cost 2", "cost 3"]
    const forms = ["forms 1", "forms 2", "forms 3"]
    const slots = ["slots 1", "slots 2", "slots 3"]

    const switchList  = (listName: string): string[] =>{
        let returnedData: string[] = []
        switch(listName){
            case LOCATION_LIST:
                returnedData = locations
                break
            case GALLERY_LIST:
                returnedData = gallery
                break
            case COST_LIST:
                returnedData = costs
                break
            case FORMS_LIST:
                returnedData = forms
                break
            case SLOTS_LIST:
                returnedData = slots
                break
        }
        return returnedData
    }
    return(
        <ScrollView style={styles.container}>
            <ListItems
                data={switchList(props.selectedListName)}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        height: "100%",
        backgroundColor: "lightgreen",
    }
})

