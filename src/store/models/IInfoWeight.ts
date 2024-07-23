export interface ICurrentInfoWeight{
    currentValue:IInfoWeight;
    listValues:IListInfoWeight;
    generalListValues:IListInfoWeight;
}
export  interface IListInfoWeight extends Array<IInfoWeight> {}
export  interface IInfoWeight{
    name:string;
    date:Date;
    weight:number;
}