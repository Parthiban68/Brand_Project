const userController = require('../Controllers/contollerLayer');
const userService = require('../Services/userService');
const userRepositry =require('../Config/Repository/Repo');
const userModel = require('../Model/UserModel');


class container{
    constructor(){
        this.userModel = userModel;
        this.userRepositry = new userRepositry(this.userModel);
        this.userService = new userService(this.userRepositry);
        this.userController = new userController(this.userService);
    }

    getUserController(){
        return this.userController;
    }
}

module.exports = new container