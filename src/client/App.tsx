import * as React from 'react';
import { render } from 'react-dom';

const App = () => {
    
    React.useEffect(() => {
      fetch('/details')
          .then(res => res.json())
          .then(json => console.log(json))
    });

  return <h1>helloс!</h1>;
};

render(<App />, document.getElementById('app'));
