import { Route, HashRouter as Router, Routes } from 'react-router-dom';

import { Header } from './Header';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Header />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
// Temporary AppRouter
