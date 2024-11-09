const userController = require('../Controllers/contollerLayer');
const userService = require('../Services/userService');
const userRepositry =require('../Config/Repository/Repo');
const userModel = require('../Model/UserModel');
const userEmail = require('../Utils/Email/emailService')

class container{
    constructor(){
        this.userModel = userModel;
        this.userRepositry = new userRepositry(this.userModel);
        this.userEmail = userEmail;
        this.userService = new userService(this.userRepositry, this.userEmail);
        this.userController = new userController(this.userService);
    }

    getUserController(){
        return this.userController;
    }
}

module.exports = new container