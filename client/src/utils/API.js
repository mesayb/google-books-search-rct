
import axios from "axios";
require('dotenv').config();
const APIKEY = `${process.env.REACT_APP_GOOGLE_APIKEY}`;

export default {
  //search from Google books API
  searchBook: function(bookTitle) {

 
 console.log('key - '+APIKEY)
    console.log("KEY = "+APIKEY)
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${bookTitle}&key=${APIKEY}`);
  },

  //API to save and retreive data from MongoDB
    saveBook: function(data) {
    return axios({
    method: 'POST',
    url:'/api/books',
    data: data
    });
  },

  getBooks: function() {
    return axios({
    method: 'GET',
    url:'/api/books',
    });
  },

  deleteBook: function(id) {
    console.log("id = "+id)
    return axios({
    method: 'DELETE',
    url:`/api/books/${id}`,
    });
  },
};








// import axios from "axios";

// export default {
//   // Gets all books
//   getBooks: function() {
//     return axios.get("/api/books");
//   },
//   // Gets the book with the given id
//   getBook: function(id) {
//     return axios.get("/api/books/" + id);
//   },
//   // Deletes the book with the given id
//   deleteBook: function(id) {
//     return axios.delete("/api/books/" + id);
//   },
//   // Saves a book to the database
//   saveBook: function(bookData) {
//     return axios.post("/api/books", bookData);
//   }
// };
