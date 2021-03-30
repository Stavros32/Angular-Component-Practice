

export interface Complex{
    prizes:Prize[];
}

interface Prize{
    year:number;
    category:string;
    laureates:Laureate[];
}

interface Laureate{
    id:number;
    firstname:string;
    surname:string;
    motivation:string;
    share:number;
}