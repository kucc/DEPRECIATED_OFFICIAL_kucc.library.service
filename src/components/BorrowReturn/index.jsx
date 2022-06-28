import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import { getAuth } from 'firebase/auth';
import { doc, updateDoc } from 'firebase/firestore';
import { storeService } from 'src/firebase.js';

import { borrowState, loginState } from '../Atom';
import { StyledBorrowReturnButton, StyledBorrowReturnContainer } from './style';

export const BorrowReturn = ({ bookData, id }) => {
  const isLoggedin = useRecoilValue(loginState);
  const [userName, setUserName] = useState('');
  const [isBorrowed, setIsBorrowed] = useRecoilState(borrowState);
  const auth = getAuth();
  const user = auth.currentUser;

  const borrowReturnUpdate = async () => {
    if (isLoggedin && id) {
      const bookRef = doc(storeService, 'books', id);
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
    if (user) {
      setUserName(user.displayName);
    }
  }, [user]);

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
