const {v4:uuidv4} = require('uuid')
const bcrypt = require('bcryptjs')
class userService {
  constructor(userRepositry, userEmail) {
    this.userRepositry = userRepositry;
    this.userEmail = userEmail;
  }

  async createUser(username, email, password) {
    const userExists = await this.userRepositry.findByEmail(email);

    if (!userExists) {
      throw new Error("User Already registered", 404);
    }

    const activationCode = uuidv4();
    const salt = await bcrypt.genSalt(10);
    const hashingPassword = await bcrypt.hash(password, salt)

    const activationLink = `http://localhost:3002/user/account/activate/${activationCode}`
    
    await this.userEmail.emailSendService()

    return await this.userRepositry.userSaved(username, email, password);
  }
}

module.exports = userService;
