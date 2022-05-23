import { atom } from 'recoil';

const searchTermState = atom({
  key: 'searchTermState',
  default: '',
});

const genreFilterState = atom({
  key: 'genreFilterState',
  default: '',
});

const loginState = atom({
  key: 'loginState',
  default: '',
});

export { searchTermState, genreFilterState, loginState };
