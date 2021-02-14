import { Detail } from 'src/common/detail.model';

export class ApiService {
  getDetails(): Promise<Detail[]> {
    return fetch('api/details').then((res) => res.json());
  }

  deleteDetail(id: string): Promise<Detail[]> {
    return fetch(`/api/details/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    }).then((res) => res.json());
  }
}
