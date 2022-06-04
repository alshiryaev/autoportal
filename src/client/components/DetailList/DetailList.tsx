import * as React from 'react';
import { DetailItem } from '../DetailItem/DetailItem';
import './DetailList.scss';
import { Modal } from '../Modal/Modal';
import { DetailListModel } from './detail-list.model';
import { Detail } from "../../../common/detail.model";

const DetailList: React.FC<DetailListModel> = ({ details, onDelete }) => {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = React.useState(false);
  const [selectedDetail, setSelectedDetail] = React.useState(null);

  function openDeleteConfirm(detail: Detail) {
    setSelectedDetail(detail);
    setIsDeleteDialogOpen(true);
  }

  function sumbitDialog() {
    setIsDeleteDialogOpen(false);
    onDelete(selectedDetail.id);
  }

  function cancelDialog() {
    setIsDeleteDialogOpen(false);
  }

  return (
    <>
      {isDeleteDialogOpen && (
        <Modal
          title="Удаление"
          onSubmit={sumbitDialog}
          onCancel={cancelDialog}
          isOpen={isDeleteDialogOpen}
        >
          Удалить {selectedDetail.name}?
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
