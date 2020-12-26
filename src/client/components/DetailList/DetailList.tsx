import * as React from 'react';
import { Detail } from 'src/common/detail.model';
import { DetailItem } from '../DetailItem/DetailItem';
import './DetailList.scss';

const DetailList: React.FC<{ details: Detail[] }> = ({ details }) => {
  return (
    <React.Fragment>
      <header className="page-header">Список деталей</header>
      <ul className="detail-list">
        {details.map((detail) => (
          <DetailItem detail={detail}></DetailItem>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default DetailList;
