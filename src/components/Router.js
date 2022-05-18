import { Route, HashRouter as Router, Routes } from 'react-router-dom';

import { MainPage } from '../pages';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
// Temporary AppRouter
