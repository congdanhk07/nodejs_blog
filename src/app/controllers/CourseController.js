const Course = require("../models/Course");
const { mutipleMongooseToObject } = require("../../util/mongoose");
class CourseController {
  //[GET] /course/:slug
  show(req, res) {
    res.send("COURSE DETAIL" + req.params.slug);
  }
}

module.exports = new CourseController();
