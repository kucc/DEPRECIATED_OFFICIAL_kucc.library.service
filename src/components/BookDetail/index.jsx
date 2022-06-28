import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

import { getAuth } from 'firebase/auth';

import { bookDataState, borrowState } from '../Atom';
import { StyledBookDetail, StyledBookDetailContainer } from './style';

export const BookDetail = () => {
  const [userName, setUserName] = useState('');
  const [borrower, setBorrower] = useState('');
  const [dueDate, setDueDate] = useState('');
  const isBorrowed = useRecoilValue(borrowState);
  const bookData = useRecoilValue(bookDataState);

  const auth = getAuth();
  const user = auth.currentUser;

  const bookTerm = () => {
    if (isBorrowed) {
      const date = bookData.borrowDate.toDate();
      const term = new Date(date.setDate(date.getDate() + 14));
      setDueDate(
        term.getFullYear() + '/' + (term.getMonth() + 1) + '/' + term.getDate(),
      );
    } else {
      const date = new Date();
      const term = new Date(date.setDate(date.getDate() + 14));
      setDueDate(
        term.getFullYear() + '/' + (term.getMonth() + 1) + '/' + term.getDate(),
      );
    }
  };

  const bookBorrower = () => {
    isBorrowed ? setBorrower(userName) : setBorrower('대출자가 없습니다!!');
  };

  useEffect(() => {
    if (user) {
      setUserName(user.displayName);
    }
  }, [user]);

  useEffect(() => {
    bookTerm();
    bookBorrower();
  }, [isBorrowed]);

  return (
    <StyledBookDetailContainer>
      <StyledBookDetail>대출 기한: {dueDate}</StyledBookDetail>
      <StyledBookDetail>책 소개: {bookData.info}</StyledBookDetail>
      <StyledBookDetail>대출자: {borrower}</StyledBookDetail>
    </StyledBookDetailContainer>
  );
};
