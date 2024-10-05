class MeController {
  //[GET] /news/:slug
  storedCourses(req, res) {
    res.render("me/stored-courses");
  }
}
module.exports = new MeController();
