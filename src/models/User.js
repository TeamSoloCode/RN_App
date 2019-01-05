class User{
    constructor(name, email, photoUrl, phone, date, loggedBy){
        this.name = name;
        this.email = email;
        this.photoUrl = photoUrl;
        this.phone = phone;
        this.date = date;
        this.loggedBy = loggedBy;
    }

    /**
     * set user name
     */
    set name(name){
        this.name = name;
    }

    /**
     * get username
     */
    get name(){
        return this.name;
    }

    /**
     * set user's email
     */
    set email(email){
        this.email = email;
    }

    /**
     * get user's email
     */
    get email(){
        return this.email;
    }

    /**
     * Set user avatar
     */
    set photoUrl(photoUrl){
        this.photoUrl = photoUrl;
    }

    /**
     * get user's avatar
     */
    get photo(){
        return this.photoUrl;
    }

    /**
     * set user's phone
     */
    set phone(phone){
        this.phone = phone;
    }

    /**
     * get user's phone
     */
    get phone(){
        return this.phone;
    }

    /**
     * set user's date
     */
    set date(date){
        this.date = date;
    }

    /**
     * get user date
     */
    get date(){
        return this.date;
    }

    /**
     * set user loggin status
     */
    set loggedBy(loggedBy){
        this.loggedBy = loggedBy;
    }

    /**
     * get user loggin status
     */
    get loggedBy(){
        return this.loggedBy
    }
}