export interface IUser {
    id: number;
    user_name: string;
    email: string;
    password: string;
    first_name: string;
    last_name: string;
    display_name: string;
    gender: string;
    gsm: string;
    avatr_url: string;
    adresse: IAdresse;
    register_at: Date;
}


export interface IAdresse {
    address_1: string;
    adresse_2: string;
    postal_code: string;
    town: string;
    country: string;
}