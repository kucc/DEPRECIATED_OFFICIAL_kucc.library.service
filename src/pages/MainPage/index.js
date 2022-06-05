import React from 'react';
import { useRecoilValue } from 'recoil';

import { Book, Footer, Header, SearchBox, SideBar } from '../../components';
import { filteredBooksState } from '../../components/Atom/atom';
import { BookDetail } from '../../components/BookDetail/index';
import { BorrowReturn } from '../../components/BorrowReturn';
import { Search } from '../../components/Search';
import { GenreArray } from '../../constants/GenreArray';

export const MainPage = () => {
  const filteredbooks = useRecoilValue(filteredBooksState);
  return (
    <>
      <Header />
      <SideBar genreArray={GenreArray} />
      <SearchBox />
      <Search />
      {Object.values(filteredbooks).map(book => (
        <Book
          key={book.name}
          title={book.name}
          author={book.author}
          publisher='d'
          pubDate={new Date()}
          bookCover=''
          desc='d'
        />
      ))}
      <BorrowReturn />
      <BookDetail />
      <Footer />
    </>
  );
};
