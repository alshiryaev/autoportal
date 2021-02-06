import * as React from 'react';
import { Detail } from 'src/common/detail.model';
import { DetailItem } from '../DetailItem/DetailItem';
import { deleteDetail as apiDelete } from '../../services/api.service';
import './DetailList.scss';

const DetailList: React.FC<{ details: Detail[] }> = ({ details }) => {
  function deleteDetail(id: string) {
    if (confirm('Вы уверены, что хотите удалить деталь?')) {
      apiDelete(id).then(() => alert('Удаление успешно завершено.'));
    }
  }

  return (
    <React.Fragment>
      <header className="page-header">Список деталей</header>
      <ul className="detail-list">
        {details.map((detail) => (
          <li className="detail-container">
            <div className="detail-item">
              <DetailItem detail={detail}></DetailItem>
            </div>
            <button
              className="button button-flat button-delete"
              onClick={() => deleteDetail(detail.id)}
            ></button>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default DetailList;
