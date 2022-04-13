import Navbar from "./components/Navbar";
import logo from './logo.svg';
import './App.css';

const App =  () => {
return  <div className="App">
       <Navbar></Navbar>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Currently Following <code>React E-Commerce App Design Tutorial</code>.
        </p>
        <a
          className="App-link"
          href="https://youtu.be/c1xTDSIXit8"
          target="_blank"
          rel="noopener noreferrer"
        >
          Video Link
        </a>
        <p>
          For Middleware <code> React Storefront Page Example</code>.
        </p>
        <a
          className="App-link"
          href="https://github.com/saleor/react-storefront"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github Page Link
        </a>
      </header>
    </div>

};
export default App;