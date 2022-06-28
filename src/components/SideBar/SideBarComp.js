import PropTypes from 'prop-types';
import { useSetRecoilState } from 'recoil';
import { genreFilterState } from '../Atom';
import { StyledSideBarComp } from './style';



function SideBarComp({ genre }) {
  const setGenreFilter = useSetRecoilState(genreFilterState);

  const onClickGenre = () => {
    setGenreFilter(genre);
  };
  return <StyledSideBarComp onClick={onClickGenre}>{genre}</StyledSideBarComp>;
}

SideBarComp.propTypes = {
  genre: PropTypes.string.isRequired,
};

export default SideBarComp;
