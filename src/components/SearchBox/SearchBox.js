import { useState } from 'react';

import { StyledSearchBox, StyledSearchBtn, StyledSearchDiv } from './style';

function SearchBox() {
  const [inputText, setInputText] = useState('');

  const onChange = ({ target: { value } }) => {
    setInputText(value);
  };

  return (
    <StyledSearchDiv>
      <StyledSearchBox
        type='text'
        value={inputText}
        onChange={onChange}></StyledSearchBox>
      {/* onClick 함수 지정*/}
      <StyledSearchBtn onClick={() => {}}>검색</StyledSearchBtn>
    </StyledSearchDiv>
  );
}

export default SearchBox;
