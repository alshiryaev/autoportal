import * as React from 'react';
import { Detail } from '../../../common/detail.model';
import './DetailItem.scss';

export const DetailItem: React.FC<{ detail: Detail }> = ({ detail }) => {
  return (
    <div className="detail-card">
      <div className="detail-card__image">
        <span>photo</span>
      </div>
      <div>
        <header className="detail-card__title">{detail.name}</header>
        <p className="detail-card__price">{detail.price}</p>
      </div>
    </div>
  );
};
