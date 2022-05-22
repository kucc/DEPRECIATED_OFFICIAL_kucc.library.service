import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';

import { DefaultLogo } from '../DefaultLogo';
import {
  StyledFooterBox,
  StyledFooterContainer,
  StyledFooterDesc,
  StyledFooterImgBox,
  StyledFooterLink,
  StyledFooterTitle,
  StyledFooterVerticalLine,
  StyledHorizontalLine,
} from './style';

export const Footer = () => {
  const navigate = useNavigate();
  const isReducedScreen = useMediaQuery({ query: '(max-width: 1224px)' });
  const onImgClick = () => {
    const path = window.location.pathname;
    if (path === '/') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
      navigate('/');
      window.scrollTo(0, 0);
    }
  };

  return (
    <>
      <StyledFooterContainer>
        <StyledFooterBox>
          <StyledFooterTitle>Designers</StyledFooterTitle>
          <StyledFooterVerticalLine />
          <StyledFooterDesc>이지운 이희준 최현서</StyledFooterDesc>
        </StyledFooterBox>
        <StyledFooterBox>
          <StyledFooterTitle>Developers</StyledFooterTitle>
          <StyledFooterVerticalLine />
          <StyledFooterDesc>신동현 이지운 이희준 최현서</StyledFooterDesc>
        </StyledFooterBox>
        <StyledHorizontalLine />
        <StyledFooterBox>
          <StyledFooterTitle>GitHub</StyledFooterTitle>
          <StyledFooterLink
            href='https://github.com/kucc/kucc-library-service'
            target='_blank'>
            https://github.com/kucc/kucc-library-service
          </StyledFooterLink>
        </StyledFooterBox>
        <>
          <StyledFooterBox>
            <StyledFooterTitle>KUCC</StyledFooterTitle>
            <StyledFooterLink href='https://kucc.co.kr/' target='_blank'>
              https://kucc.co.kr/
            </StyledFooterLink>
          </StyledFooterBox>
          <StyledFooterDesc
            style={{
              marginLeft: isReducedScreen ? '70px' : '200px',
              marginTop: '-5px',
              marginBottom: '5px',
            }}>
            Korea University Computer Club(고려대학교 중앙 컴퓨터 동아리)
          </StyledFooterDesc>
        </>
        <StyledFooterBox>
          <StyledFooterTitle>Contact</StyledFooterTitle>
          <StyledFooterDesc>jjs01hwang@gmail.com (이희준)</StyledFooterDesc>
        </StyledFooterBox>
        <StyledFooterImgBox>
          <DefaultLogo
            width={isReducedScreen ? 70 : 124}
            height={isReducedScreen ? 70 : 124}
            logoName='type-1-3'
            style={{ pointer: 'cursor' }}
            isPointer={true}
            onClick={onImgClick}
          />
          <StyledFooterDesc>
            Copyright ⓒ KUCC All Rights Reserved
          </StyledFooterDesc>
        </StyledFooterImgBox>
      </StyledFooterContainer>
    </>
  );
};
