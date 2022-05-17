import { Route, HashRouter as Router, Routes } from 'react-router-dom';

import { Book } from './Book';
import { Footer } from './Footer';
import { Header } from './Header';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <Book
              title='책 이름입니다'
              author='나'
              desc='책 설명'
              publisher='출판사'
              pubDate='20202020'
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRouter;
// Temporary AppRouter
