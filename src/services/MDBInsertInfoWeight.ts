
import {IInfoWeight} from "../store/models/IInfoWeight";
import IInsertInfoWeight from "./IInsertInfoWeight";
import { MongoClient, ServerApiVersion } from "mongodb" ;



export default class MDBInsertInfoWeight implements IInsertInfoWeight{

    uri = "mongodb://127.0.0.1/Test1";
    table:string = "InfoWeight";

    client ;

    constructor(){
        this.client = new MongoClient(this.uri,  
            {
              serverApi: {
                  version: ServerApiVersion.v1,
                  strict: true,
                  deprecationErrors: true,
              }
            });
      }    

      async setInfoWeight(infoWeight: IInfoWeight) : Promise<any>{
        console.log("Estoy dentro");
        try {
          // Connect the client to the server (optional starting in v4.7)
          var conection = await this.client.connect()
          // Send a ping to confirm a successful connection
            const test1DB = conection.db("Test1");
            const noRelacional = test1DB.collection(this.table);                
            await noRelacional.insertOne(infoWeight);            
        }
        
        finally {
          // Ensures that the client will close when you finish/error
          this.client.close();
          //return response;
          //return pipeline;
          return true;
        }
    }

}