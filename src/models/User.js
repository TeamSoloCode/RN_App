export default class User{

    constructor(name = null, email = null, password = null, photoUrl = null,
                 phone = null, date = null, loggedBy = null){
        this.name = name;
        this.email = email;
        this.photoUrl = photoUrl;
        this.phone = phone;
        this.date = date;
        this.loggedBy = loggedBy;
        this.password = password;
    }

}