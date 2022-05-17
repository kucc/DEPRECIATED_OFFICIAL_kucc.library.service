import { Route, HashRouter as Router, Routes } from 'react-router-dom';

import SearchBox from './SearchBox/SearchBox';
import SideBar from './SideBar/SideBar';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <>
              {/*genreArray db 기반으로 변경*/}
              <SideBar
                genreArray={[
                  '인공지능',
                  '데이터분석',
                  '디자인',
                  '게임',
                  '하드웨어',
                  '언어',
                  '앱',
                  '이론',
                  '웹',
                  '기타',
                ]}
              />
              <SearchBox />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRouter;
// Temporary AppRouter
