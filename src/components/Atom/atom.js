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

const filteredBooksState = atom({
  key: 'filteredBooksState',
  default: [],
});


const borrowState = atom({
  key: 'borrowState',
  default: '',
});

const bookDataState = atom({
  key: 'bookDataState',
  default: '',
});

export {
  searchTermState,
  genreFilterState,
  loginState,
  borrowState,
  bookDataState,
  filteredBooksState,
};

