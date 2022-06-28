import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import { getAuth } from 'firebase/auth';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { storeService } from 'src/firebase.js';

import { bookDataState, borrowState, loginState } from '../Atom';
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
      } else {
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
    fetchBookData();
    if (user) {
      setUserName(user.displayName);
    }
  }, [bookData]);

  useEffect(() => {
    if (bookData) {
      if (bookData.borrower === userName) {
        setIsBorrowed(true);
      } else if (bookData.borrower === null) {
        setIsBorrowed(false);
      }
    }
  }, [bookData]);

  const borrowReturnButton = parameter => {
    return (
      <StyledBorrowReturnContainer>
        <StyledBorrowReturnButton>App</StyledBorrowReturnButton>
        <StyledBorrowReturnButton
          onClick={borrowReturnUpdate}
          style={{ color: '#CF0000' }}>
          {bookData && parameter}
        </StyledBorrowReturnButton>
      </StyledBorrowReturnContainer>
    );
  };
  return isBorrowed ? borrowReturnButton('반납') : borrowReturnButton('대출');
};
