import logo from './logo.svg';
import './App.css';
import {BrowserRoute as Router, Switch, Route, Redirect} from 'react-router-dom'
import MovieList from './pages/MovieList';
import ViewMovie from './pages/ViewMovie';

function App() {
  return (
    <>
      {/* <Router>
        <Switch>
          <Route path='/' component={MovieList} />
          <Route path='/viewMovie' component={ViewMovie} />
          <Redirect to='/'/>
        </Switch>
      </Router> */}
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
