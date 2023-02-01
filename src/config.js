require("dotenv").config();

const mongo = {
  mongodbUrl: process.env.DB_URI || "mongodb://localhost/quizzes",
};

module.exports = mongo;
