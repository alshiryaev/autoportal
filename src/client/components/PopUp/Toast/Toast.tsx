import * as React from 'react';

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

export default Toast;
