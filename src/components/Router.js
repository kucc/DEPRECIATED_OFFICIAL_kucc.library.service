import { Route, HashRouter as Router, Routes } from 'react-router-dom';

import { Book } from './Book';

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
              desc='책 설명책 설명책 설명책 설명책 설명책 설명책 설명책 설명책 설명책 설명책 설명책 설명책 설명책 설명책 설명책 설명책 설명책 설명책 설명책 설명책 설명책 설명책 설명책 설명'
              publisher='출판사'
              pubDate={new Date()}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRouter;
// Temporary AppRouter
