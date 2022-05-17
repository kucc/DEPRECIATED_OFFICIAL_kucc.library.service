import { RecoilRoot } from 'recoil';

import './App.css';
import AppRouter from './components/Router';
import './styles/font.css';

function App() {
  return (
    <RecoilRoot>
      <AppRouter />
    </RecoilRoot>
  );
}

export default App;
