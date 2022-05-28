import React from 'react';

import { Book, Footer, Header, SearchBox, SideBar } from '../../components';
import { BorrowReturn } from '../../components/BorrowReturn';
import { Search } from '../../components/Search';
import { GenreArray } from '../../constants/GenreArray';

export const MainPage = () => {
  return (
    <>
      <Header />
      <SideBar genreArray={GenreArray} />
      <SearchBox />
      <Search />
      <Book
        title='책'
        author='s'
        publisher='d'
        pubDate={new Date()}
        bookCover='s'
        desc='d'
      />
      <BorrowReturn />
      <Footer />
    </>
  );
};
