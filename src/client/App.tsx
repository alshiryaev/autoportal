import * as React from 'react';
import { render } from 'react-dom';

import {DetailItem} from './components/DetailItem/DetailItem';
import DetailsList from './components/DetailsList/DetailsList';

const App = () => {
  const [details, setDetails] = React.useState([]);

  React.useEffect(() => {

    fetch('api/details')
      .then((res) => res.json())
      .then((json) => setDetails(json));
  });

  return (
    <DetailsList details={details} />
  );
};

render(<App />, document.getElementById('app'));
