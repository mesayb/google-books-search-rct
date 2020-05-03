import React, { useState, useEffect, Fragment } from "react";
import Jumbotron from "../components/Jumbotron";
import BookCard from "../components/BookCard";
import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import API from "../utils/API";
import Nav from "../components/Nav";

function Books() {
  // Initialize books as an empty array
  const [books, setBooks] = useState({
    title: 'People Skills',
    result: [],
    saved: false
  });

  // state = {
  //   search: "",
  //   breeds: [],
  //   results: [],
  //   error: ""
  // };

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  React.useEffect(() => {
    API.searchBook(books.title)
      .then(res => {
        const result = res.data.items.map(item => {
          return {
            id: item.id,
            authors: item.volumeInfo.authors,
            description: item.volumeInfo.description,
            image: item.volumeInfo.imageLinks.thumbnail,
            link: item.volumeInfo.previewLink,
            title: item.volumeInfo.title,
          }
        })
        
        setBooks({
          ...books,
        result: result,
        saved: false
      })
    })
      .catch(err => console.log(err));
  }, [])



  const handleInputChange = event => {
    setBooks(
      {
        ...books,
        title: event.target.value
      })
  };

  const handleFormSubmit = event => {
    event.preventDefault();

    API.searchBook(books.title)
      .then(res => {
        
        const result = res.data.items.map(item => {
          return {
            id: item.id,
            authors: item.volumeInfo.authors,
            description: item.volumeInfo.description,
            image: item.volumeInfo.imageLinks.thumbnail,
            link: item.volumeInfo.previewLink,
            title: item.volumeInfo.title,
          }
        })
        console.log("result1 = ", result)
        setBooks({
          ...books,
          result: result,
          saved: false
       
    });

        // //reset the search box
        // setBooks({
        //   authors:'',
        //   description:'',
        //   image:'',
        //   link:'',
        //   title:''
        // });

        console.log(JSON.stringify(books))
      })
      .catch(err => console.log(err));
  };

  const handleNavChange = event => {
    setBooks(
      {
        ...books,
        saved: event.target.value
      })
    console.log("mesay = ", books)
  };

  // useEffect(() => {
  //   loadBooks();
  // }, []);

  // function loadBooks() {
  //   // Add code here to get all books from the database and store them using setBooks

  // }

  return (
    <Fragment>
      <Nav onClick={handleNavChange} />
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Google Books Search</h1>
              <h4>Search for and save Books of Interest</h4>
            </Jumbotron>
          </Col>
        </Row>

        <Row>
          <Col size="md-12">
            <h5>Book Search</h5>
            <h3>{books.title}</h3>
            <p>Book</p>

            <Input onChange={handleInputChange}
              value={books.title} placeholder="Type something to search Google books library" ></Input>
            <FormBtn onClick={handleFormSubmit}>Search</FormBtn>
          </Col>
        </Row>

        <BookCard result={books.result} />

      </Container>
    </Fragment>

  );
}

export default Books;
