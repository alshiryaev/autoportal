import * as React from 'react';
import { render } from 'react-dom';

import {DetailItem} from './components/DetailItem/DetailItem';

const App = () => {
  const [details, setDetails] = React.useState([]);

  React.useEffect(() => {

    fetch('api/details')
      .then((res) => res.json())
      .then((json) => setDetails(json));
  });

  return (
    <ol>
      {details.map((detail) => (
        <DetailItem detail={detail}></DetailItem>
      ))}
    </ol>
  );
};

render(<App />, document.getElementById('app'));
