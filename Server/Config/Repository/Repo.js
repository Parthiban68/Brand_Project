class userRepositry {
  constructor(userModel) {
    this.userModel = userModel;
  }

  async findByEmail(email) {
    return await this.userModel.findOne({ email });
  }

  async userSaved(username, email, password) {
    let newUser = new this.userModel({
      username: username,
      email: email,
      password: password,
    });

    return await newUser.save();
  }
}

module.exports = userRepositry;
