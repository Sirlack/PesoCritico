export default interface Igame{
    juego: IgameElement;
}
interface IgameElement{
    namegame:string;
    participants:participants;
    admin:participants;
    games:games;
    Logic:logic;
}
interface participants extends Array<participantsElement>{}
interface participantsElement{
    name:string;    
}
interface games extends Array<gamesElement>{}
interface gamesElement{
    date:Date;
    participantsData: participantsData;
}
interface participantsData extends Array<participantsDataElement> {}
interface participantsDataElement{
    name:string;
    weight: number;
    price:number;
    minWeight:number;
    weightDiff:number;
}
interface logic extends Array<logicElement>{}
interface logicElement{
    type:string;
    levels:levels;
}
interface levels extends Array<level>{}
interface level{
    level:number;
    price:number;
}