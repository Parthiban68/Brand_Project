class userService {
  constructor(userRepositry) {
    this.userRepositry = userRepositry;
  }

  async createUser(username, email, password) {
    const userExists = await this.userRepositry.find
  }
}

module.exports = userService