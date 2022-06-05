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

  //tempBookList -> Booklist로
  const getBooks = async () => {
    const dbBooks = await getDocs(collection(storeService, 'books'));
    const bookList = [];
    dbBooks.forEach(book => {
      bookList.push(book.data());
    });
    setTempBookList(bookList);
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

    if (searchTerm.length) {
      const searchList = searchTerm.trim().split(/\s+/);
      const queryList = ['^'];
      searchList.forEach(word => {
        queryList.push('(?=.*' + word.toLowerCase() + ')');
      });
      queryList.push('.+');
      const query = queryList.join('');

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
  }, [searchTerm, genreFilter]);

  useEffect(() => {
    setFilteredBoooksState(genre.filter(book => search.includes(book)));
  }, [search, genre]);
}

Search.propTypes = {
  //Booklist: PropTypes.array.isrequired,
  Booklist: PropTypes.array,
};
