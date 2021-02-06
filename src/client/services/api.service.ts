export function deleteDetail(id: string): Promise<any> { 
    return (
        fetch(`/api/details/${id}`,{
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
      }).then()
      )
}