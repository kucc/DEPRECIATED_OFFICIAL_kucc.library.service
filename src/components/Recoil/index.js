import { atom } from 'recoil';

const searchTermState = atom({
  key: 'searchTermState',
  default: '',
});

const genreFilterState = atom({
  key: 'genreFilterState',
  default: '',
});

export { searchTermState, genreFilterState };
