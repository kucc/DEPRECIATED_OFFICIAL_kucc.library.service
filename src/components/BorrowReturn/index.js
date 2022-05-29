import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import { getAuth } from 'firebase/auth';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { storeService } from 'src/firebase.js';

import { bookDataState, borrowState, loginState } from '../Atom/atom';
import { StyledBorrowReturnButton, StyledBorrowReturnContainer } from './style';

export const BorrowReturn = () => {
  const isLoggedin = useRecoilValue(loginState);
  const [userName, setUserName] = useState('');
  const [isBorrowed, setIsBorrowed] = useRecoilState(borrowState);
  const [bookData, setBookData] = useRecoilState(bookDataState);
  const bookRef = doc(storeService, 'books', 'A1'); // A1 -> id로 변경

  const auth = getAuth();
  const user = auth.currentUser;
  const fetchBookData = async () => {
    const getBookData = await getDoc(doc(storeService, 'books', 'A1')); // A1 -> id로 변경
    setBookData(getBookData.data());
  };
  useEffect(() => {
    fetchBookData();
    if (user) {
      setUserName(user.displayName);
    }
  }, [user]);

  const borrowReturnUpdate = async () => {
    if (isLoggedin) {
      if (isBorrowed === false) {
        await updateDoc(bookRef, {
          borrowData: true,
          borrower: userName,
          borrowDate: new Date(),
        });
        setIsBorrowed(true);
        alert('대출이 완료되었습니다!');
      } else if (isBorrowed === true) {
        await updateDoc(bookRef, {
          borrowData: false,
          borrower: null,
          borrowDate: null,
        });
        setIsBorrowed(false);
        alert('반납이 완료되었습니다!');
      }
    } else alert('로그인 해주세요!');
  };

  useEffect(() => {
    if (bookData) {
      if (bookData.borrower === userName) {
        setIsBorrowed(true);
      } else if (bookData.borrower === null) {
        setIsBorrowed(false);
      }
    }
  }, [bookData, userName]);

  const borrowReturnButton = () => {
    if (isBorrowed === false) {
      return (
        <StyledBorrowReturnContainer>
          <StyledBorrowReturnButton>App</StyledBorrowReturnButton>
          <StyledBorrowReturnButton
            onClick={borrowReturnUpdate}
            style={{ color: '#CF0000' }}>
            {bookData && '대출'}
          </StyledBorrowReturnButton>
        </StyledBorrowReturnContainer>
      );
    } else if (isBorrowed === true) {
      return (
        <StyledBorrowReturnContainer>
          <StyledBorrowReturnButton>App</StyledBorrowReturnButton>
          <StyledBorrowReturnButton
            onClick={borrowReturnUpdate}
            style={{ color: '#CF0000' }}>
            {bookData && '반납'}
          </StyledBorrowReturnButton>
        </StyledBorrowReturnContainer>
      );
    }
  };
  return borrowReturnButton();
};
