import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

import DetailList from './components/DetailList/DetailList';
import AddDetail from './components/AddDetail/AddDetail';
import Home from './components/Home/Home';
import Toast from './components/Toast/Toast';

import './App.scss';
import { ApiService } from './services/api.service';

import { PopupMessage } from './models/notification.model';
import { NotificationType } from './models/notification.model';
import { Detail } from '../common/detail.model';

const App = () => {
  const [popupMessages, setPopupMessages] = React.useState<PopupMessage[]>([]);
  const apiService = new ApiService();
  const [details, setDetails] = React.useState<Detail[]>([]);

  React.useEffect(() => {
    apiService.getDetails().then((json) => setDetails(json));
  }, []);

  async function deleteDetail(id: string): Promise<void> {
    const newDetails = details.filter((d) => d.id !== id);
    setDetails(newDetails);
    await apiService.deleteDetail(id);
    const notificationList = popupMessages.concat({
      id: String(id),
      type: NotificationType.Success,
      title: 'Удаление',
      description: `Деталь успешно удалена`,
    });
    setPopupMessages(notificationList);
  }

  return (
    <React.Fragment>
      <Toast toastList={popupMessages} position='bottom-right' />
      <Router>
        <header className='header'>
          <nav>
            <ul className='menu'>
              <li className='menu__item'>
                <Link className='link' to='/'>
                  AUTOPORTAL
                </Link>
              </li>
              <li className='menu__item'>
                <Link className='link' to='/details'>
                  Каталог деталей
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/details'>
            <div>
              <Link className='link' to='/addDetail'>
                Добавить деталь
              </Link>
              <DetailList
                onDelete={deleteDetail}
                details={details}
              ></DetailList>
            </div>
          </Route>
          <Route path='/addDetail'>
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
