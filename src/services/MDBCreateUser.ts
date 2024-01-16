import { MongoClient, ServerApiVersion } from "mongodb" ;

export default class MDBCreateUser implements ICreateUser{

    // Create a MongoClient with a MongoClientOptions object to set the Stable API version
uri = "mongodb://127.0.0.1/Test1";
table:string = "user";

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
async setUser(info:ICreateUserField): Promise<Boolean>{
        let pipeline;
        console.log("Estoy dentro");
        try {
          // Connect the client to the server (optional starting in v4.7)
          var conection = await this.client.connect()
          // Send a ping to confirm a successful connection
            const test1DB = conection.db("Test1");
            const noRelacional = test1DB.collection(this.table);                
            await noRelacional.insertOne(info);            
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

