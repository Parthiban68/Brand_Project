class userService {
  constructor(userRepositry) {
    this.userRepositry = userRepositry;
  }

  async createUser(username, email, password) {
    const userExists = await this.userRepositry.findByEmail(email);

    if (!userExists) {
      throw new Error("User Already registered", 404);
    }

    return await this.userRepositry.userSaved(username, email, password);
  }
}

module.exports = userService;
