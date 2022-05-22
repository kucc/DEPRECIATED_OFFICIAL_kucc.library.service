import React from 'react';
import { useRecoilValue } from 'recoil';

import { Book, Footer, Header, SearchBox, SideBar } from '../../components';
import { searchTermState } from '../../components/Atom/atom';

//genreArray db 기반으로 변경
const myGenreArray = [
  '인공지능',
  '데이터분석',
  '디자인',
  '게임',
  '하드웨어',
  '언어',
  '앱',
  '이론',
  '웹',
  '기타',
];

export const MainPage = () => {
  const text = useRecoilValue(searchTermState);
  console.log(text);
  return (
    <>
      <Header />
      <SideBar genreArray={myGenreArray} />
      <SearchBox />
      <Book
        title='책'
        author='s'
        publisher='d'
        pubDate={new Date()}
        bookCover='s'
        desc='d'
      />
      <Footer />
    </>
  );
};
