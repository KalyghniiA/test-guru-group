import React from 'react';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import Main from '../../pages/main/main';

function App(): JSX.Element {
  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Root} element={<Main />} />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
