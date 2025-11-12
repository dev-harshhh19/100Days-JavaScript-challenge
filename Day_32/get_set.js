class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
    get email(){
        return this._email.toUpperCase();
    }
    set email(newEmail){
        this._email = newEmail.toUpperCase();
    }

    get password(){
        return `${this._password}harshad`
    }
    set password(newPassword){
        this._password = newPassword
    }
}
const harshad = new User("harshad@example.com", "SecurePassword@123");
console.log(harshad.email);
console.log(harshad.password);
