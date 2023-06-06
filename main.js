class User{
    // username;
    // password;
    constructor(username, password){
        this.username = username;
        this.password = password;
    }
    show(){
        console.log(this.username);
    }
}

let user = new User('Sherara', 'S060806')

user.show()