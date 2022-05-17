import { useState } from 'react';
import { useSetRecoilState } from 'recoil';

import { searchTermState } from '../Atom/atom';
import { StyledSearchBox, StyledSearchBtn, StyledSearchDiv } from './style';

function SearchBox() {
  const [inputText, setInputText] = useState('');

  const setSearchTerm = useSetRecoilState(searchTermState);

  const onChangeText = e => {
    setInputText(e.target.value);
  };

  const onClickBtn = () => {
    setSearchTerm(inputText);
    setInputText('');
  };

  const onKeyPressEnter = e => {
    if (e.key == 'Enter') {
      onClickBtn();
    }
  };

  return (
    <StyledSearchDiv>
      <StyledSearchBox
        type='text'
        value={inputText}
        onChange={onChangeText}
        onKeyPress={onKeyPressEnter}
      />
      <StyledSearchBtn onClick={onClickBtn}>검색</StyledSearchBtn>
    </StyledSearchDiv>
  );
}

export default SearchBox;
