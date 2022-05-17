import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
} from 'firebase/auth';
import { authService } from 'src/firebase.js';

import { DefaultLogo } from '../DefaultLogo';
import {
  StyledHeaderContainer,
  StyledHeaderLogoContainer,
  StyledHeaderText,
  StyledHeaderTextContainer,
} from './style';

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const auth = getAuth();
  const navigate = useNavigate();
  const onSocialClick = async name => {
    let provider;
    if (name === 'Google') {
      provider = new GoogleAuthProvider();
    } else if (name === 'GitHub') {
      provider = new GithubAuthProvider();
    }
    await signInWithPopup(auth, provider);
  };
  const onLogOutClick = () => {
    authService.signOut();
    navigate('/');
  };
  const arr = ['Google', 'GitHub'];
  useEffect(() => {
    onAuthStateChanged(auth, user => {
      user ? setIsLoggedIn(true) : setIsLoggedIn(false);
    });
  }, [auth]);
  return (
    <>
      <StyledHeaderContainer>
        <StyledHeaderTextContainer>
          <Link to='/'>
            <StyledHeaderLogoContainer>
              <DefaultLogo
                isPointer={true}
                logoName='type-1-3'
                width={90}
                height={90}
              />
            </StyledHeaderLogoContainer>
          </Link>
        </StyledHeaderTextContainer>
        <StyledHeaderTextContainer>
          {isLoggedIn ? (
            <>
              <StyledHeaderText>MY</StyledHeaderText>
              <StyledHeaderText onClick={onLogOutClick}>
                로그아웃
              </StyledHeaderText>
            </>
          ) : (
            <>
              {arr.map((v, index) => {
                return (
                  <StyledHeaderText
                    key={index}
                    onClick={() => onSocialClick(v)}>
                    {v}로 계속하기
                  </StyledHeaderText>
                );
              })}
            </>
          )}
        </StyledHeaderTextContainer>
      </StyledHeaderContainer>
    </>
  );
};
