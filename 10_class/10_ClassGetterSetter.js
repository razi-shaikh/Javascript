class user{
    constructor(email,password){
        this.email=email;
        this.password=password
    }
    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
         this._password=value
    }
}
const razi=new user('tempmail@123.com','securePassword')
console.log(razi.password);