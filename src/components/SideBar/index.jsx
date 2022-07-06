import { GenreArray } from '@constants';

import SideBarComp from './SideBarComp';
import { StyledSideBar } from './style';

export function SideBar() {
  return (
    <StyledSideBar>
      {GenreArray.map(genre => (
        <SideBarComp key={genre} genre={genre} />
      ))}
    </StyledSideBar>
  );
}
