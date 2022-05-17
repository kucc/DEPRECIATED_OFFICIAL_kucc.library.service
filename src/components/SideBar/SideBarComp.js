import PropTypes from 'prop-types';

import { StyledSideBarComp } from './style';

/*onClick 함수 정의*/
function SideBarComp({ genre }) {
  return <StyledSideBarComp onClick={() => {}}>{genre}</StyledSideBarComp>;
}

SideBarComp.propTypes = {
  genre: PropTypes.string.isRequired,
};

export default SideBarComp;
