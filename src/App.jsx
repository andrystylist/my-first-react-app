import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <>
      <Header>
        404 NOT FOUND
      </Header>
      <Main>
        <NotFound />
      </Main>
      <Footer />
    </>
  );
}

export default App;
