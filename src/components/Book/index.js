import React from 'react';

import {
  StyledBookContainer,
  StyledBookDesc,
  StyledBookInfo,
  StyledBookTitle,
  StyledHorizontalLine,
} from './style';

export const Book = ({
  title,
  author,
  publisher,
  pubDate,
  bookCover,
  desc,
}) => {
  return (
    <StyledBookContainer>
      <StyledBookTitle>{title}</StyledBookTitle>
      <StyledHorizontalLine />
      <StyledBookInfo>
        {author + ' | ' + publisher + ' | ' + pubDate}
      </StyledBookInfo>
      <StyledBookDesc>{desc}</StyledBookDesc>
    </StyledBookContainer>
  );
};
