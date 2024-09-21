import React from "react";
import Icon from "react-native-vector-icons/Ionicons";

export type NavigationBoxType ={
    title: string;
    icon: React.ReactNode;
    link: string;
}

export const NAVIGATION_BOX_DATA: NavigationBoxType[] =[
    {title: "Location", icon: <Icon name="ios-heart" size={30} color="white" />, link: "TransferScreen" },
    {title: "Gallery", icon: <Icon name="md-checkmark-circle" size={30} color="white"/>, link: "Discard"},
    {title: "Cost", icon: <Icon name="md-checkmark-circle" size={30} color="white" />, link: "Verification" },
    {title: "Form", icon: <Icon name="md-checkmark-circle" size={30} color="white" />, link: "Breakdown"},
    {title: "Slot", icon: <Icon name="md-checkmark-circle" size={30} color="green" />, link: "Breakdown"},
]

export const LOCATION_SCREEN = "Location"
export const GALLERY_SCREEN = "Gallery"
export const COST_SCREEN = "Cost"
export const FORMS_SCREEN = "Form"
export const SLOT_SCREEN = "Slot"
export const VOID_SCREEN = "Void"
