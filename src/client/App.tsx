import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Toast from "./components/PopUp/Toast/Toast";

import DetailList from './components/DetailList/DetailList';
import AddDetail from './components/AddDetail/AddDetail';
import Home from './components/Home/Home';

import './App.scss';
import { Detail } from 'src/common/detail.model';
import { ApiService } from './services/api.service';

const BUTTON_PROPS = [
  {
    id: 1,
    type: 'success',
    className: 'success',
    label: 'Success',
  }
]

const App = () => {
  const apiService = new ApiService();
  const [details, setDetails] = React.useState<Detail[]>([]);
  React.useEffect(() => {
    apiService.getDetails().then((json) => setDetails(json));
  }, []);

  async function deleteDetail(id: string): Promise<void> {
    const newDetails = details.filter((d) => d.id !== id);
    setDetails(newDetails);
    await apiService.deleteDetail(id).then();
  }

  function Toast(props) {
    const { toastList, position } = props;
    const [list, setList] = React.useState(toastList);
  
    React.useEffect(() => {
      setList(toastList);
    }, [toastList, list]);
  
    const deleteToast = (id) => {
      const index = list.findIndex((e) => e.id === id);
      list.splice(index, 1);
      setList([...list]);
    };
  
    return (
      <div className={`notification-container ${position}`}>
        {list.map((toast, i) => (
          <div
            key={i}
            className={`notification toast ${position}`}
            style={{ backgroundColor: toast.backgroundColor }}
          >
            <button onClick={() => deleteToast(toast.id)}>X</button>
            <div>
              <p className="notification__title">{toast.title}</p>
              <p className="notification__message">{toast.message}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
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
            <DetailList onDelete={deleteDetail} details={details}></DetailList>
            <Toast toastList={BUTTON_PROPS} position="bottom-right" />
          </div>
        </Route>
        <Route path="/addDetail">
          <div>
            <AddDetail />
          </div>
        </Route>
      </Switch>
    </Router>
  );
};

render(<App />, document.getElementById('app'));
