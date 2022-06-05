import { useRecoilState } from 'recoil';

import { searchTermState } from '../Atom/atom';
import { StyledSearchBox, StyledSearchBtn, StyledSearchDiv } from './style';

export function SearchBox() {
  const [searchTerm, setSearchTerm] = useRecoilState(searchTermState);

  const onChangeText = e => {
    setSearchTerm(e.target.value);
  };

  return (
    <StyledSearchDiv>
      <StyledSearchBox type='text' value={searchTerm} onChange={onChangeText} />
      <StyledSearchBtn>검색</StyledSearchBtn>
    </StyledSearchDiv>
  );
}
