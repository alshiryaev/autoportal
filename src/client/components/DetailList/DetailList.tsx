import * as React from 'react';
import { Detail } from 'src/common/detail.model';
import { DetailItem } from '../DetailItem/DetailItem';
import './DetailList.scss';
import { Modal } from '../Modal/Modal';
import { ApiService } from 'src/client/services/api.service';
import { useState } from 'react';

const DetailList: React.FC<{
    details: Detail[]; 
    deleteDetail: (id: string) => void;
  }> = ({ details, deleteDetail }) => {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = React.useState(false);
  const [selectedDetail, setSelectedDetail] = React.useState(null);

  function openDeleteConfirm(detail: Detail) {
    setSelectedDetail(detail);
    setIsDeleteDialogOpen(true);
  }

  function sumbitDialog() {
    setIsDeleteDialogOpen(false);
    deleteDetail(selectedDetail.id); 
  }

  function cancelDialog() {
    setIsDeleteDialogOpen(false);
  }

  return (
    <>
      {isDeleteDialogOpen && (
        <Modal
          title="Предупреждение"
          onSubmit={sumbitDialog}
          onCancel={cancelDialog}
          isOpen={isDeleteDialogOpen}
        >
          Вы действительно хотите удалить {selectedDetail.name}?
        </Modal>
      )}
      <header className="page-header">Список деталей</header>
      <ul className="detail-list">
        {details.map((detail) => (
          <li className="detail-container">
            <div className="detail-item">
              <DetailItem detail={detail}></DetailItem>
            </div>
            <button
              className="button button-flat button-delete"
              onClick={() => openDeleteConfirm(detail)}
            ></button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default DetailList;