export class IMarket {
    _id: string;
    market_name: string;
    address?: IAddress;
    city?: string;
    position?: IPosition;
    logo_url?: string;
}


export class IAddress {
     address1: string;
     address2?: string;
     postalCode: number;
}

export class IPosition {
    latitude: number;
    longitude: number;
}
