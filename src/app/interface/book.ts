export interface Book{
    key?:string,
    name:string,
    author:String,
    price:number,
    rating:number,
    genre:string,
    favorite:Boolean,
    archive:Boolean,
    timestamp?: Date ,
    lastopen?: string,
    date?:string
}