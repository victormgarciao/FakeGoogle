// import logo from './logo.svg';
import './App.scss';
import { Footer } from './comonents/organisms/footer/footer';
import { Header } from './comonents/organisms/header/header';
import { Main } from './comonents/organisms/main/main';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main />
      <Footer />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
