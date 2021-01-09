import * as React from 'react';
import { Detail } from 'src/common/detail.model';
import './DetailItem.scss';
import DeleteDetail from "../DeleteDetail/DeleteDetail";

export const DetailItem: React.FC<{ detail: Detail }> = ({ detail }) => {
  console.log(detail);
  return (
    <li className="detail__item">
      <div className="detail-card">
        <div className="detail-card__image">
          <span>photo</span>
        </div>
        <div>
          <header className="detail-card__title">{detail.name}</header>
          <p className="detail-card__price">{detail.price}</p>
          <button className="detail-card__delete" onClick={() => DeleteDetail(detail.id)}>X</button>
        </div>
      </div>
    </li>
  );
};
