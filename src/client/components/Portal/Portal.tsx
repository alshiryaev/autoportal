import * as React from 'react';
import { createPortal } from 'react-dom';

export const Portal = ({ children }) => {
  const el = document.createElement('div');

  React.useEffect(() => {
    document.body.appendChild(el);
  }, []);

  React.useEffect(() => {
    return () => {
      document.body.removeChild(el);
    };
  }, [el]);

  return createPortal(children, el);
};
