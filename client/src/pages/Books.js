import React, { useState, useEffect, Fragment } from "react";
import Jumbotron from "../components/Jumbotron";
import BookCard from "../components/BookCard";
import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import API from "../utils/API";
import Nav from "../components/Nav";
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Books() {
  // Initialize books as an empty array
  const [books, setBooks] = useState({
    title: '',
    result: [],
    saved: 'false'
  });


  React.useEffect(() => {
    API.searchBook(books.title)
      .then(res => {
        const result = res.data.items.map(item => {
          return {
            gid: item.id,
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
          saved: 'false'
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
            gid: item.id,
            authors: item.volumeInfo.authors,
            description: item.volumeInfo.description,
            image: item.volumeInfo.imageLinks.thumbnail,
            link: item.volumeInfo.previewLink,
            title: item.volumeInfo.title,
          }
        })

        toast.success(`Google Books search result for  - ${books.title}`);
        setBooks({
          ...books,
          result: result,
          saved: 'false'

        });
      })
      .catch(err => {
        console.log(err)
        toast.success(`No Data  - ${books.title}`);
      });
  };

  const handleNavChange = event => {
    const currentNav = event.target.value;
    if (currentNav === 'true') {
      getBooksFromDB();
    } else {
      setBooks(
        {
          ...books,
          title: '',
          result: [],
          saved: 'false'
        })

    }


  };

  const saveBookToDB = (event) => {
    const data = books.result.filter(book => book.gid === event.target.id);

    API.saveBook(data[0]).then(res => {
      toast.success(`Saved - ${data[0].title}`);
    })
      .catch(err => {
        console.log(err);
        toast.error(`Failed to save - ${data[0].title}`);
      });
  }

  const getBooksFromDB = (event) => {

    API.getBooks().then(res => {
      const result = res.data.map(item => {
        return {
          gid: item.gid,
          authors: item.authors,
          description: item.description,
          image: item.image,
          link: item.link,
          title: item.title,
          id: item._id
        }
      })
      toast.success("Here are your saved Books");
      setBooks({
        ...books,
        result: result,
        saved: 'true'

      })
    })
      .catch(err => {
        toast.error("No Saved book available");
        console.log(err)
      });
  }

  const deleteBookFromDB = (event) => {
    const gid = event.target.id;
    const data = books.result.filter(book => book.gid === gid);
    const id = data[0].id
    API.deleteBook(id).then(res => {
      toast.success(`Deleted - ${data[0].title}`);
      getBooksFromDB();
    })
      .catch(err => {
        console.log(err);

        toast.error(`FAILED to Delete - ${data[0].title}`);

      });
  }
  return (
    <Fragment>
      <Nav onClick={handleNavChange} />
      <Container fluid>
        <ToastContainer />
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

        {books.saved === 'true' ? <BookCard result={books.result} deleteBookFromDB={deleteBookFromDB} saved={books.saved} /> : <BookCard result={books.result} saveBookToDB={saveBookToDB} saved={books.saved} />}

      </Container>
    </Fragment>

  );
}

export default Books;
