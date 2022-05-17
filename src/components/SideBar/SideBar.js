import PropTypes from 'prop-types';

import SideBarComp from './SideBarComp';
import { StyledSideBar } from './style';

function SideBar({ genreArray }) {
  return (
    <StyledSideBar>
      {genreArray.map(genre => (
        <SideBarComp key={genre} genre={genre} />
      ))}
    </StyledSideBar>
  );
}

SideBar.propTypes = {
  genreArray: PropTypes.array.isRequired,
};

export default SideBar;
