import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import {CostType, GalleryType, LocationType, SlotType} from "@/types/general-types";
import {IMG_1, IMG_2, IMG_3, IMG_4, IMG_5} from "@/constants/image-constants";

export type NavigationBtnType ={
    title: string;
    iconName: string
    link: string;
}

export const NAVIGATION_BUTTON_DATA: NavigationBtnType[] =[
    {title: "Location", iconName: "location-outline", link: "TransferScreen" },
    {title: "Gallery", iconName: "images-outline" , link: "Discard"},
    {title: "Cost", iconName: "cash-outline", link: "Verification" },
    {title: "Form", iconName: "duplicate-outline" , link: "Breakdown"},
    {title: "Slot", iconName: "calendar-number", link: "Breakdown"},
]




export const IMG_LINK: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQQhAnK3Uek8qfMxM_Y6hlBfshp0NDCUNCEg&s"
export const description = "A General Practitioner (GP) is a medical doctor who provides primary and continuing care for patients of all ages"



export const LOCATION_SCREEN = "LocationScreen"
export const GALLERY_SCREEN = "GalleryScreen"
export const COST_SCREEN = "CostScreen"
export const FORMS_SCREEN = "FormScreen"
export const SLOT_SCREEN = "SlotScreen"



export const LOCATION_DATA: LocationType[] = [
    {SubscriptionCode: "SC1020", ServiceCode: "SER1000", ServiceName: "General Practitioner", Longitude: 33.44, Latitude: -35.10, StreetName: "8 Twilley St"},
    {SubscriptionCode: "SC1020", ServiceCode: "SER1000", ServiceName: "General Practitioner", Longitude: 38.44, Latitude: -35.10, StreetName: "25 Peddy Rd"},
    {SubscriptionCode: "SC1020", ServiceCode: "SER1000", ServiceName: "General Practitioner", Longitude: 40.44, Latitude: -35.10, StreetName: "19 St Andrews Rd"},
    {SubscriptionCode: "SC1020", ServiceCode: "SER1000", ServiceName: "General Practitioner", Longitude: 50.44, Latitude: -35.10, StreetName: "2 Punters Way"},
    {SubscriptionCode: "SC1020", ServiceCode: "SER1000", ServiceName: "General Practitioner", Longitude: 60.44, Latitude: -35.10, StreetName: "7 Reform St"},
    {SubscriptionCode: "SC1020", ServiceCode: "SER1000", ServiceName: "General Practitioner", Longitude: 80.44, Latitude: -35.10, StreetName: "7 Luna St"},
    {SubscriptionCode: "SC1020", ServiceCode: "SER1000", ServiceName: "General Practitioner", Longitude: 55.44, Latitude: -35.10, StreetName: "7 Luther Rd"},
]

export const GALLERY_DATA: GalleryType[] = [
    {SubscriptionCode: "SC1020", ServiceCode: "SER1000", ServiceName: "General Practitioner", ImgUrl: IMG_1},
    {SubscriptionCode: "SC1020", ServiceCode: "SER1000", ServiceName: "General Practitioner", ImgUrl: IMG_2},
    {SubscriptionCode: "SC1020", ServiceCode: "SER1000", ServiceName: "General Practitioner", ImgUrl: IMG_3},
    {SubscriptionCode: "SC1020", ServiceCode: "SER1000", ServiceName: "General Practitioner", ImgUrl: IMG_4},
    {SubscriptionCode: "SC1020", ServiceCode: "SER1000", ServiceName: "General Practitioner", ImgUrl: IMG_5},

]


export const COST_DATA: CostType[] = [
    {SubscriptionCode: "SC1020", ServiceCode: "SER1000", ServiceName: "General Practitioner", CostAmount: 200},
    {SubscriptionCode: "SC1020", ServiceCode: "SER1000", ServiceName: "General Practitioner", CostAmount: 300},
    {SubscriptionCode: "SC1020", ServiceCode: "SER1000", ServiceName: "General Practitioner", CostAmount: 400},
    {SubscriptionCode: "SC1020", ServiceCode: "SER1000", ServiceName: "General Practitioner", CostAmount: 500},
    {SubscriptionCode: "SC1020", ServiceCode: "SER1000", ServiceName: "General Practitioner", CostAmount: 700},

]


export const SLOT_DATA: SlotType[] = [
    {SubscriptionCode: "SC1020", ServiceCode: "SER1000", ServiceName: "General Practitioner",  From: "10:00", To: "15:00", Day: "Monday"},
    {SubscriptionCode: "SC1020", ServiceCode: "SER1000", ServiceName: "General Practitioner",  From: "08:00", To: "16:00", Day: "Tuesday"},
    {SubscriptionCode: "SC1020", ServiceCode: "SER1000", ServiceName: "General Practitioner",  From: "07:00", To: "18:00", Day: "Wednesday"},
    {SubscriptionCode: "SC1020", ServiceCode: "SER1000", ServiceName: "General Practitioner",  From: "15:00", To: "18:00", Day: "Thursday"},
    {SubscriptionCode: "SC1020", ServiceCode: "SER1000", ServiceName: "General Practitioner",  From: "12:00", To: "20:00", Day: "Friday"}
]