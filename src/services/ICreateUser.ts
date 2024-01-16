interface ICreateUser{
    setUser: (info:ICreateUserField) => Promise<any>;
}
interface ICreateUserField{
    date:Date,
    name: String,
    surname: String,
    password: String,
    password2: String    
}
