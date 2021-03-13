import * as React from 'react';
import { NotificationType } from 'src/client/models/notification.model';
import './Toast.scss';

function Toast(props) {
  const { toastList, position } = props;
  const [list, setList] = React.useState(toastList);

  const colorConfig = {
    Success: '#5cb85c',
    Danger: '#d9534f',
    Info: '#5bc0de',
    Warning: '#f0ad4e',
  };

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
          style={{ backgroundColor: colorConfig[toast.type] }}
        >
          <button onClick={() => deleteToast(toast.id)}>X</button>
          <div>
            <p className="notification__title">{toast.title}</p>
            <p className="notification__message">{toast.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Toast;
