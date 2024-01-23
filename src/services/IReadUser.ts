interface IReadUser{
    readValue: (info:IDataBaseFieldRead) => Promise<any>;
}
interface IDataBaseFieldRead{
    tableName:string;
    fieldName:string;
    fieldValue:any;
}
