import React, { useEffect, useState } from 'react';

import { collection, getDocs } from 'firebase/firestore';

import { Book, Footer, Header, SearchBox, SideBar } from '../../components';
import { GenreArray } from '../../constants/GenreArray';
import { storeService } from '../../firebase';
import { StyledBooksContainer } from './style';

export const MainPage = () => {
  const [bookArray, setBookArray] = useState([]);

  const fetchBookData = async () => {
    const getBookData = await getDocs(collection(storeService, 'books'));
    const tempBookArray = [];
    getBookData.forEach(doc => {
      tempBookArray.push(doc.data());
    });
    setBookArray(tempBookArray);
  };

  useEffect(() => {
    fetchBookData();
  }, []);

  return (
    <>
      <Header />
      <SideBar genreArray={GenreArray} />
      <SearchBox />
      <StyledBooksContainer>
        {bookArray.map((book, key) => (
          <Book
            key={key}
            title={book.name}
            author={book.author}
            publisher={''}
            pubDate={new Date()}
            bookCover={book.image}
            desc={book.info}
          />
        ))}
      </StyledBooksContainer>

      <Footer />
    </>
  );
};
