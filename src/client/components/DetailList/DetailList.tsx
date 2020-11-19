import * as React from 'react';
import { DetailItem } from '../DetailItem/DetailItem';

const DetailList = ({ details }) => {
  return (
    <ol>
      {details.map((detail) => (
        <DetailItem detail={detail}></DetailItem>
      ))}
    </ol>
  );
};

export default DetailList;
