import { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { collection, getDocs } from 'firebase/firestore';
import PropTypes from 'prop-types';

import { storeService } from '../../firebase';
import {
  filteredBooksState,
  genreFilterState,
  searchTermState,
} from '../Atom/atom';

export function Search(Booklist) {
  const searchTerm = useRecoilValue(searchTermState);
  const genreFilter = useRecoilValue(genreFilterState);
  const setFilteredBoooksState = useSetRecoilState(filteredBooksState);
  const [tempBooklist, setTempBookList] = useState([]);
  const [genre, setGenre] = useState([]);
  const [search, setSearch] = useState([]);
  const [query, setQuery] = useState('');

  //tempBookList -> Booklist로
  const getBooks = async () => {
    const dbBooks = await getDocs(collection(storeService, 'books'));
    const bookList = [];
    dbBooks.forEach(book => {
      bookList.push(book.data());
    });
    setTempBookList(bookList);
    setGenre(bookList);
    setSearch(bookList);
  };

  useEffect(() => {
    getBooks();
  }, []);

  useEffect(() => {
    if (genreFilter.length) {
      setGenre(
        Object.values(tempBooklist).filter(
          book => book.classificationName.toString() === genreFilter,
        ),
      );
    } else {
      setGenre(tempBooklist);
    }
  }, [genreFilter]);

  useEffect(() => {
    if (searchTerm.length) {
      setQuery('^');
      const searchList = searchTerm.trim().split(/\s+/);
      searchList.forEach(word => {
        setQuery(prev => prev + '(?=.*' + word.toLowerCase() + ')');
      });
      setQuery(prev => prev + '.+');
    } else {
      setQuery('');
    }
  }, [searchTerm]);

  useEffect(() => {
    if (query.length) {
      setSearch(
        Object.values(tempBooklist).filter(
          book =>
            (book.author + ' ' + book.name)
              .toLowerCase()
              .match(RegExp(query)) != null,
        ),
      );
    } else {
      setSearch(tempBooklist);
    }
  }, [query]);

  useEffect(() => {
    setFilteredBoooksState(genre.filter(book => search.includes(book)));
  }, [search, genre]);
}

Search.propTypes = {
  //Booklist: PropTypes.array.isrequired,
  Booklist: PropTypes.array,
};
