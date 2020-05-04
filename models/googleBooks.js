const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const googleBooksSchema = new Schema({
  gid: String,
  title: { type: Array, required: true },
  authors: { type: Array, required: true },
  description: String,
  link: String,
  image: String,
});

const GoogleBook = mongoose.model("GoogleBook", googleBooksSchema);

module.exports = GoogleBook;
