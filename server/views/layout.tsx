import * as React from 'react';

const Layout = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body>
        <div id="app"></div>
        <script src="./bundle.js"></script>
      </body>
    </html>
  );
};

export default Layout;
