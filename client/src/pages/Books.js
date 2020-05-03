import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import BookCard from "../components/BookCard";
import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

function Books() {
  // Initialize books as an empty array
  const [books, setBooks] = useState([]);

  useEffect(() => {
    loadBooks();
  }, []);

  function loadBooks() {
    // Add code here to get all books from the database and store them using setBooks

  }

  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>Google Books Search</h1>
            <h4>Search for and save Books of Interest</h4>
          </Jumbotron>
          {/* <form>
            <Input name="title" placeholder="Title (required)" />
            <Input name="author" placeholder="Author (required)" />
            <TextArea name="synopsis" placeholder="Synopsis (Optional)" />
            <FormBtn>Submit Book</FormBtn>
          </form> */}
        </Col>
        {/* <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>
            {books.length ? (
              <List>
                {books.map(book => (
                  <ListItem key={book._id}>
                    <a href={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </a>
                    <DeleteBtn />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col> */}
      </Row>

      <Row>
        <Col size="md-12">

          {/* <div className="container"> */}
          <h5>Book Search</h5>
          <p>Book</p>
            <input className="form-control" id="anythingSearch" type="text" placeholder="Type something to search list items" />
            <FormBtn>Search</FormBtn>
          {/* </div> */}

        </Col>
      </Row>
    
      <BookCard />
   
    </Container>
  );
}

export default Books;
