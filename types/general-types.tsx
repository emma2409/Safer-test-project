// TYPES

export type LocationType = {
    SubscriptionCode: string,
    ServiceCode: string,
    ServiceName: string,
    Latitude: number,
    Longitude: number,
    StreetName: string
}




export type GalleryType = {
    SubscriptionCode: string,
    ServiceCode: string,
    ServiceName: string,
    ImgUrl: string
}

export type CostType = {
    SubscriptionCode: string,
    ServiceCode: string,
    ServiceName: string,
    CostAmount: number,
}


export type SlotType = {
    SubscriptionCode: string,
    ServiceCode: string,
    ServiceName: string,
    From: string
    To: string,
    Day: string
}



// Initialized data

export const InitialLocationType: LocationType = {
    SubscriptionCode: "",
    ServiceCode: "",
    ServiceName: "",
    Latitude: 0,
    Longitude: 0,
    StreetName: ""
}

export const InitialGalleryType: GalleryType = {
    SubscriptionCode: "",
    ServiceCode: "",
    ServiceName: "",
    ImgUrl: ""
}


export const InitialCostType: CostType = {
    SubscriptionCode: "",
    ServiceCode: "",
    ServiceName: "",
    CostAmount: 0,
}

export const InitialSlotType: SlotType = {
    SubscriptionCode: "",
    ServiceCode: "",
    ServiceName: "",
    From: "",
    To: "",
    Day: ""
}




