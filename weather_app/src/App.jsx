import React from 'react';
import './App.css';
import { WeatherApp } from './WeatherApp';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const HomeScreen = (props) => {
  console.log(props);
  const params = props.location.search.split('&').reduce((values, item) => {
    const [key, val] = item.split('=');
    values[key] = val;
    return values;
  }, {});
  console.log(params);
  return (
    <h1>
      HELLOW {params['?name']} {params.age}
    </h1>
  );
};
const AboutScreen = () => <h1>About US</h1>;

function App() {
  return (
    <div className='App'>
      <Router>
        <header>
          <nav>
            <Link to='/'>Home</Link>
            <Link to='/weather'>Weather</Link>
            <Link to='/about'>About</Link>
          </nav>
        </header>
        <main style={{ border: '1px solid red' }}>
          <Route path='/' exact='true' component={HomeScreen} />
          <Route path='/weather' component={WeatherApp} />
          <Route path='/about' component={AboutScreen} />
        </main>
        <footer>
          <h1>TEST</h1>
        </footer>
      </Router>
    </div>
  );
}

export default App;
