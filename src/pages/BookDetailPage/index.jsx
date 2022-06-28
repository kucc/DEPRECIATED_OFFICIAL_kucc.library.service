import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { doc, getDoc } from 'firebase/firestore';

import { BookDetail, BorrowReturn, Footer, Header } from '../../components';
import { storeService } from '../../firebase';

export const BookDetailPage = () => {
  const { id } = useParams();

  const [bookData, setBookData] = useState([]);

  const fetchBookData = async id => {
    const getBookData = await getDoc(doc(storeService, 'books', id));
    setBookData(getBookData.data());
  };

  useEffect(() => {
    if (id) {
      fetchBookData(id);
    }
  }, [id]);

  return (
    <>
      <Header />
      <BookDetail bookData={bookData} />
      <BorrowReturn bookData={bookData} />
      <Footer />
    </>
  );
};
