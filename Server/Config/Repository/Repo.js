class userRepositry {
  constructor(userModel) {
    this.userModel = userModel;
  }

  async findByEmail(email) {
    return await this.userModel.findOne({email});
  }

  async userSaved(username, email, password, activationCode) {
    console.log("hi1");
    let newUser = new this.userModel({
      username,
      email,
      password,
      activationCode,
    });
    
    const data =  await newUser.save();
    
    return
  }
}

module.exports = userRepositry;
