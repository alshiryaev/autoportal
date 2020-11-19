import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

import DetailList from './components/DetailList/DetailList';
import Home from './components/Home/Home';

import './App.scss';
import { Detail } from 'src/common/detail.model';

const App = () => {
  const [details, setDetails] = React.useState<Detail[]>([]);
  React.useEffect(() => {
    fetch('api/details')
      .then((res) => res.json())
      .then((json) => setDetails(json));
  }, []);

  return (
    <Router>
      <header className="header">
        <nav>
          <ul className="menu">
            <li className="menu__item">
              <Link to="/">AUTOPORTAL</Link>
            </li>
            <li className="menu__item">
              <Link to="/details">Каталог деталей</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/details">
          <div>
            <h1>Список деталей</h1>
            <DetailList details={details}></DetailList>
          </div>
        </Route>
      </Switch>
    </Router>
  );
};

render(<App />, document.getElementById('app'));
