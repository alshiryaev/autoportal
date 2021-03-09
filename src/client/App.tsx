import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

import DetailList from './components/DetailList/DetailList';
import AddDetail from './components/AddDetail/AddDetail';
import Home from './components/Home/Home';
import Toast from './components/Toast/Toast';

import './App.scss';
import { Detail } from 'src/common/detail.model';
import { ApiService } from './services/api.service';

const BUTTON_PROPS = [
  {
    id: 1,
    type: 'success',
    className: 'success',
    label: 'Success',
  },
];

const App = () => {
  const [list, setList] = React.useState([]);
  let toastProperties = null;
  const apiService = new ApiService();
  const [details, setDetails] = React.useState<Detail[]>([]);
  React.useEffect(() => {
    apiService.getDetails().then((json) => setDetails(json));
  }, []);
  async function deleteDetail(id: string): Promise<void> {
    const newDetails = details.filter((d) => d.id !== id);
    setDetails(newDetails);
    await apiService.deleteDetail(id);
    showToast('success');
  }

  function showToast(type) {
    //Генерация ID
    const id = Math.floor(Math.random() * 101 + 1);

    switch (type) {
      case 'success':
        toastProperties = {
          id,
          title: 'Success',
          description: 'This is a success toast component',
          backgroundColor: '#5cb85c',
        };
        break;
      case 'danger':
        toastProperties = {
          id,
          title: 'Danger',
          description: 'This is a error toast component',
          backgroundColor: '#d9534f',
        };
        break;
      case 'info':
        toastProperties = {
          id,
          title: 'Info',
          description: 'This is an info toast component',
          backgroundColor: '#5bc0de',
        };
        break;
      case 'warning':
        toastProperties = {
          id,
          title: 'Warning',
          description: 'This is a warning toast component',
          backgroundColor: '#f0ad4e',
        };
        break;

      default:
        setList([]);
    }
    setList([...list, toastProperties]);
  }

  return (
    <React.Fragment>
      <Toast toastList={list} position="bottom-right" />
      <Router>
        <header className="header">
          <nav>
            <ul className="menu">
              <li className="menu__item">
                <Link className="link" to="/">
                  AUTOPORTAL
                </Link>
              </li>
              <li className="menu__item">
                <Link className="link" to="/details">
                  Каталог деталей
                </Link>
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
              <Link className="link" to="/addDetail">
                Добавить деталь
              </Link>
              <DetailList
                onDelete={deleteDetail}
                details={details}
              ></DetailList>
            </div>
          </Route>
          <Route path="/addDetail">
            <div>
              <AddDetail />
            </div>
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
};

render(<App />, document.getElementById('app'));
