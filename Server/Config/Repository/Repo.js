class userRepositry{
    constructor(userModel){
        this.userModel = userModel
    }

    async findByEmail(email){
        return await this.userModel.findOne({email})
    }
}

module.exports = userRepositry