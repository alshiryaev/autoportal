import './PopUp.scss';
import Toast from "./Toast/Toast";
import Button from "./Button/Button";
import React, { useState } from 'react';

const BUTTON_PROPS = [
  {
    id: 1,
    type: 'success',
    className: 'success',
    label: 'Success'
  },
  {
    id: 2,
    type: 'danger',
    className: 'danger',
    label: 'Danger'
  },
  {
    type: 'info',
    className: 'info',
    label: 'Info'
  },
  {
    id: 4,
    type: 'warning',
    className: 'warning',
    label: 'Warning'
  },
];

const PopUp = () =>{
  const [list, setList] = useState([]);
  let toastProperties = null;

  function showToast(type) {
    //Генерация ID
    const id = Math.floor((Math.random() * 101) + 1);

    switch (type) {
      case 'success':
        toastProperties = {
          id,
          title: 'Success',
          description: 'This is a success toast component',
          backgroundColor: '#5cb85c',
        }
        break;
      case 'danger':
        toastProperties = {
          id,
          title: 'Danger',
          description: 'This is a error toast component',
          backgroundColor: '#d9534f',
        }
        break;
      case 'info':
        toastProperties = {
          id,
          title: 'Info',
          description: 'This is an info toast component',
          backgroundColor: '#5bc0de',
        }
        break;
      case 'warning':
        toastProperties = {
          id,
          title: 'Warning',
          description: 'This is a warning toast component',
          backgroundColor: '#f0ad4e',
        }
        break;

      default:
        setList([]);
    }
    setList([...list, toastProperties]);
  }

  return (
    <div className="app">
      <div className="app-header">
        <div className="toast-buttons">
          {
            BUTTON_PROPS.map(e =>
              <Button
                key={e.id}
                className={e.className}
                label={e.label}
                handleClick={() => showToast(e.type)}
              />
            )
          }
        </div>
      </div>
      <Toast
        toastList={list}
        position="bottom-right"
      />
    </div>
  );
}

export default PopUp;