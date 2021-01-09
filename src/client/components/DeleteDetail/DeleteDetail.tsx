function del(id: string) { 
    fetch(`/api/details/${id}`,{
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
      })
}

function DeleteDetail(id: string) {
    if(confirm("Вы уверены, что хотите удалить деталь?")) {
        del(id);
    }
    else {
        alert("Отменено");
    }
}
export default DeleteDetail;