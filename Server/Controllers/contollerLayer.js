class userController {
  constructor(userService) {
    this.userService = userService;
  }

  // test api
  async testapi(req, res, next) {
    try {
      res.status(200).json({ message: "Test Api Working Correctly" });
    } catch (error) {
      res.status(400).json({ message: "Test Api is not Working" });
    }
  }

  //userregistration Contoller
  async userRegistration(req, res, next) {
    const { username, email, password } = req.body;
    try {
      const user = await this.userService.createUser(username, email, password);
      res.status(200).json({ message: "User Created Successfully" });
    } catch (error) {
      res.status(400).json({ message: "User Not Created" });
    }
  }
}

module.exports = userController;
