import { Route, HashRouter as Router, Routes } from 'react-router-dom';


import SearchBox from './SearchBox/SearchBox';
import SideBar from './SideBar/SideBar';

//genreArray db 기반으로 변경
const myGenreArray = [
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
];


const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={

            <>
              <SideBar genreArray={myGenreArray} />
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
