import * as React from 'react';
import { Detail } from 'src/common/detail.model';
import { DetailItem } from '../DetailItem/DetailItem';
import './DetailList.scss';

const DetailList: React.FC<{ details: Detail[] }> = ({ details }) => {
  return (
    <ul className="detail-list">
      {details.map((detail) => (
        <DetailItem detail={detail}></DetailItem>
      ))}
    </ul>
  );
};

export default DetailList;
