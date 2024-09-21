import React from "react";
import Icon from "react-native-vector-icons/Ionicons";

export type NavigationBoxType ={
    title: string;
    icon: React.ReactNode;
    link: string;
}

export const NAVIGATION_BOX_DATA: NavigationBoxType[] =[
    {title: "Transfer", icon: <Icon name="ios-heart" size={30} color="white" />, link: "TransferScreen" },
    {title: "Discard", icon: <Icon name="md-checkmark-circle" size={30} color="white"/>, link: "Discard"},
    {title: "Verification", icon: <Icon name="md-checkmark-circle" size={30} color="white" />, link: "Verification" },
    {title: "Breakdown", icon: <Icon name="md-checkmark-circle" size={30} color="white" />, link: "Breakdown"},
]