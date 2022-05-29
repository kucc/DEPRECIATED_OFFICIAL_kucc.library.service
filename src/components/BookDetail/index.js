import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

import { getAuth } from 'firebase/auth';

import { bookDataState, borrowState } from '../Atom/atom';
import { StyledBookDetail, StyledBookDetailContainer } from './style';

export const BookDetail = () => {
  const [userName, setUserName] = useState('');
  const [borrower, setBorrower] = useState('');
  const [dueDate, setDueDate] = useState('');
  const isBorrowed = useRecoilValue(borrowState);
  const bookData = useRecoilValue(bookDataState);

  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    if (user) {
      setUserName(user.displayName);
    }
  }, [user]);

  const bookTerm = () => {
    if (isBorrowed === true) {
      const date = bookData.borrowDate.toDate();
      const term = new Date(date.setDate(date.getDate() + 14));
      setDueDate(
        term.getFullYear() + '/' + (term.getMonth() + 1) + '/' + term.getDate(),
      );
    } else if (isBorrowed === false) {
      const date = new Date();
      const term = new Date(date.setDate(date.getDate() + 14));
      setDueDate(
        term.getFullYear() + '/' + (term.getMonth() + 1) + '/' + term.getDate(),
      );
    }
  };

  const bookBorrower = () => {
    if (isBorrowed === true) {
      setBorrower(userName);
    } else if (isBorrowed === false) {
      setBorrower('대출자가 없습니다!');
    }
  };

  useEffect(() => {
    bookTerm();
    bookBorrower();
  }, [isBorrowed]);

  return (
    <StyledBookDetailContainer>
      <StyledBookDetail>대출 기한: {dueDate}</StyledBookDetail>
      <StyledBookDetail style={{ fontSize: '14px' }}>
        책 소개: {bookData.info}
      </StyledBookDetail>
      <StyledBookDetail>대출자: {borrower}</StyledBookDetail>
    </StyledBookDetailContainer>
  );
};
