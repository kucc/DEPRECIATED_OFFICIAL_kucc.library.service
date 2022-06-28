import { useRecoilState } from 'recoil';

import { searchTermState } from '../Atom';
import { StyledSearchBox, StyledSearchBtn, StyledSearchDiv } from './style';

export function SearchBox() {
  const [searchTerm, setSearchTerm] = useRecoilState(searchTermState);

  const onChangeText = e => {
    setSearchTerm(e.target.value);
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
        value={searchTerm}
        onChange={onChangeText}
        onKeyPress={onKeyPressEnter}
      />
      <StyledSearchBtn onClick={onClickBtn}>검색</StyledSearchBtn>
    </StyledSearchDiv>
  );
}
