import * as React from 'react';
import {DetailItem} from '../DetailItem/DetailItem';
//я решил попробовать передать детали самым простым и доступным способом - через пропсы
const DetailsList = (props) => {
  return (
    <ol>
      {props.details.map((detail) => (
        <DetailItem detail={detail}></DetailItem>
      ))}
    </ol>
  );
};

export default DetailsList;
