import * as React from 'react';
import './DetailItem.scss';

export function DetailItem({detail}) {
  return <li className="detail__item">{detail.name}</li>;
};
