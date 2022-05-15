import { Route, HashRouter as Router, Routes } from 'react-router-dom';

import { Footer } from './Footer';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Footer />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
// Temporary AppRouter
