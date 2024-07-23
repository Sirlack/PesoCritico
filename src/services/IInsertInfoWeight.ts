import {IInfoWeight} from "../store/models/IInfoWeight";
export default interface IInsertInfoWeight{
    setInfoWeight: (infoWeight:IInfoWeight) => Promise<any>;
}