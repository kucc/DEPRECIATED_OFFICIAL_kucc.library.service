import { useState } from 'react';
import { useRecoilValue } from 'recoil';

import { collection, getDocs } from 'firebase/firestore';
import PropTypes from 'prop-types';

import { storeService } from '../../firebase';

const { genreFilterState, searchTermState } = require('../Atom/atom');
const { useEffect } = require('react');

export function Search(Booklist) {
  const searchTerm = useRecoilValue(searchTermState);
  const genreFilter = useRecoilValue(genreFilterState);
  const [tempBooklist, setTempBookList] = useState([]);
  const [genre, setGenre] = useState([]);
  const [search, setSearch] = useState([]);

  //tempBookList -> Booklist로
  const getBooks = async () => {
    const dbBooks = await getDocs(collection(storeService, 'books'));
    dbBooks.forEach(book => {
      setTempBookList(prev => [...prev, book.data()]);
    });
  };

  useEffect(() => {
    getBooks();
  }, []);
  //

  useEffect(() => {
    if (genreFilter != '') {
      setGenre(
        Object.values(tempBooklist).filter(
          book => book.classificationName.toString() === genreFilter,
        ),
      );
    } else {
      setGenre(tempBooklist);
    }

    if (searchTerm != '') {
      const searchList = searchTerm.trim().split(/\s+/);
      var query = '^';
      searchList.forEach(word => {
        query += '(?=.*' + word.toLowerCase() + ')';
      });
      query += '.+';

      setSearch(
        Object.values(tempBooklist).filter(
          book =>
            (book.author + ' ' + book.name)
              .toLowerCase()
              .match(RegExp(query)) != null,
        ),
      );
    } else {
      setGenre(tempBooklist);
    }

    //return genre.filter(book => search.includes(book));
    console.log(genre.filter(book => search.includes(book)));
  }, [searchTerm, genreFilter]);
}

Search.propTypes = {
  Booklist: PropTypes.array.isrequired,
};
