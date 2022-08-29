import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './Components/Partials/Header';
import { AppRouter } from './Components/App/Router/Router';
import { Main } from './Components/Partials/Main';
import { Navigation } from './Components/Partials/Navigation';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navigation />
      <Main>
        <AppRouter />
      </Main>
    </BrowserRouter>
  );
}

export default App;
