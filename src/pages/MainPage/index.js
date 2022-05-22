import React, { useEffect } from 'react';
import readXlsxFile from 'read-excel-file';
import { useRecoilValue } from 'recoil';

import { doc, setDoc } from 'firebase/firestore';

import { Book, Footer, Header, SearchBox, SideBar } from '../../components';
import { searchTermState } from '../../components/Atom/atom';
import { storeService } from '../../firebase';

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
  useEffect(() => {}, []);

  const onChangeInput = e => {
    console.log(e);
    readXlsxFile(e.target.files[0]).then(rows => {
      // `rows` is an array of rows
      // each row being an array of cells.
      rows.map((row, index) => {
        if (index > 2) {
          const data = {
            id: row[0],
            name: row[1],
            subName: row[2],
            author: row[3],
            currentNumber: row[4],
            totalNumber: row[5],
            classificationCode: row[6],
            classificationName: row[7],
            borrower: null,
            borrowData: null,
            image: row[9],
            etc: row[10],
            donor: row[11],
          };
          setDoc(doc(storeService, 'books', data.id), data);
          // // Add a new document in collection "cities"
          // setDoc(doc(db, "cities", "LA"), {
          //   name: "Los Angeles",
          //   state: "CA",
          //   country: "USA"
          // });
        }
      });
    });
  };

  return (
    <>
      <Header />
      <SideBar genreArray={myGenreArray} />
      <SearchBox />
      <input type='file' onChange={onChangeInput} />
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
