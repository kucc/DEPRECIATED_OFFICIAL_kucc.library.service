import { RecoilRoot } from 'recoil';

import './App.css';
import AppRouter from './Router';
import './styles/font.css';

function App() {
  return (
    <RecoilRoot>
      <AppRouter />
    </RecoilRoot>
  );
}

export default App;
