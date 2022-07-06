import React from 'react';
import { useNavigate } from 'react-router-dom';

import PropTypes from 'prop-types';

import {
  StyledBookContainer,
  StyledBookDesc,
  StyledBookInfo,
  StyledBookTitle,
  StyledHorizontalLine,
  StyledImgContainer,
} from './style';

export const Book = ({
  title,
  author,
  publisher,
  pubDate,
  bookCover,
  desc,
}) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/A1');
  };
  return (
    <StyledBookContainer onClick={onClick}>
      <StyledBookTitle>{title}</StyledBookTitle>
      <StyledHorizontalLine />
      <StyledBookInfo>
        {author + ' | ' + publisher + ' | ' + pubDate.toLocaleDateString()}
      </StyledBookInfo>
      <StyledImgContainer>
        <img src={bookCover} style={{ width: '180px', height: '288px' }} />
      </StyledImgContainer>
      <StyledBookDesc>{desc}</StyledBookDesc>
    </StyledBookContainer>
  );
};

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  publisher: PropTypes.string,
  pubDate: PropTypes.instanceOf(Date),
  bookCover: PropTypes.string,
  desc: PropTypes.string,
};
