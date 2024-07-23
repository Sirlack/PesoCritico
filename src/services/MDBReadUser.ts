import { MongoClient, ServerApiVersion } from "mongodb" ;

export default class MDBReadUser implements IReadUser{

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
async readListValues(info:IDataBaseFieldRead): Promise<any>{
  let value;
  try{
    var connection = await this.client.connect();
    const ddbb = connection.db("Test1");
    const table = ddbb.collection(info.tableName);  
    if(info.fieldName) {
      value = await table.find({[info.fieldName]: info.fieldValue}).toArray(); 
    }
    else{
      value = await table.find({}).toArray(); 
    }         
       
  }
  finally {
    // Ensures that the client will close when you finish/error
    this.client.close();
    //return response;
    //return pipeline;
    return value;
  }  
}
async readValue(info:IDataBaseFieldRead): Promise<any>{
        console.log("Estoy dentro");
        let value;
        try {
          // Connect the client to the server (optional starting in v4.7)
          var conection = await this.client.connect()
          // Send a ping to confirm a successful connection
          const test1DB = conection.db("Test1");
          let noRelacional; 
          if(info.tableName){
            noRelacional = test1DB.collection(info.tableName);
            value = await noRelacional.findOne({[info.fieldName]:info.fieldValue});                
          }
          else{
            noRelacional = test1DB.collection(this.table); 
            value = await noRelacional.findOne(info);               
          }          
                      
        }
        
        finally {
          // Ensures that the client will close when you finish/error
          this.client.close();
          //return response;
          //return pipeline;
          return value;
        }
      
    }
}

