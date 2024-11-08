
class userController{
    constructor(userService){
        this.userService = userService
    }

    async userRegistration(req,res,next){
            const {username, email, password} = req.body;
            try {
                const user = await this.userService.createUser()
                res.status(200).json({message:"User Created Successfully"})
            } catch (error) {
                
            }
    }
}

module.exports=userController