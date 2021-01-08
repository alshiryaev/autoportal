import * as React from 'react';

function del() { 
    fetch('http://127.0.0.1/api/details', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
      });
      alert("Удаление прошло успешно!");
}

function DeleteDetail() {
    if(confirm("Вы уверены, что хотите удалить деталь?")) {
        del();
    }
    else {
        alert("Отменено");
    }
}
export default DeleteDetail;