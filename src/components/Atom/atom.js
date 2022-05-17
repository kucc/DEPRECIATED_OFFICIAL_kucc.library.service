import { atom } from 'recoil';

const searchTermState = atom({
  key: 'searchTerm',
  default: '',
});

const genreFilterState = atom({
  key: 'genreFilterState',
  default: '',
});

export { searchTermState, genreFilterState };
