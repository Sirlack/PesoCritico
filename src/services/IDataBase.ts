interface IDataBase{
    readValue: (info:IDataBaseFieldRead) => Promise<boolean>;
}
interface IDataBaseFieldRead{
    tableName:string;
    fieldName:string;
    fieldValue:any;
}
