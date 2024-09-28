import React from "react";
import Icon from "react-native-vector-icons/Ionicons";

export type NavigationBtnType ={
    title: string;
    iconName: string
    link: string;
}

export const NAVIGATION_BUTTON_DATA: NavigationBtnType[] =[
    {title: "Location", iconName: "ios-heart", link: "TransferScreen" },
    {title: "Gallery", iconName: "ios-heart" , link: "Discard"},
    {title: "Cost", iconName: "ios-heart", link: "Verification" },
    {title: "Form", iconName: "ios-heart" , link: "Breakdown"},
    {title: "Slot", iconName: "ios-heart", link: "Breakdown"},
]


export const IMG_LINK: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQQhAnK3Uek8qfMxM_Y6hlBfshp0NDCUNCEg&s"
export const description = "A General Practitioner (GP) is a medical doctor who provides primary and continuing care for patients of all ages"



export const LOCATION_SCREEN = "Location"
export const GALLERY_SCREEN = "Gallery"
export const COST_SCREEN = "Cost"
export const FORMS_SCREEN = "Form"
export const SLOT_SCREEN = "Slot"
export const VOID_SCREEN = "Void"
