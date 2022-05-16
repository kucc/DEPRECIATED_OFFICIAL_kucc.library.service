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
} from './styles';

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const auth = getAuth();
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, [auth]);
  const onSocialClick = async name => {
    let provider;
    if (name === 'google') {
      provider = new GoogleAuthProvider();
    } else if (name === 'github') {
      provider = new GithubAuthProvider();
    }
    await signInWithPopup(auth, provider);
  };
  const onLogOutClick = () => {
    authService.signOut();
    navigate('/');
  };
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
              <StyledHeaderText onClick={() => onSocialClick('google')}>
                Google로 계속하기
              </StyledHeaderText>
              <StyledHeaderText onClick={() => onSocialClick('github')}>
                GitHub로 계속하기
              </StyledHeaderText>
            </>
          )}
        </StyledHeaderTextContainer>
      </StyledHeaderContainer>
    </>
  );
};
