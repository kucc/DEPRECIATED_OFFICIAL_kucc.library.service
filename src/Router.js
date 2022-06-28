import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { BookDetailPage, MainPage } from './pages';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/:id' element={<BookDetailPage />} />
        <Route exact path='/' element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
// Temporary AppRouter
