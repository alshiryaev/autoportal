import * as React from 'react';
import { ModalDialog } from 'src/client/models/modal-dialog.model';
import { Portal } from '../Portal/Portal';
import './Modal.scss';

export const Modal: React.FC<ModalDialog> = (params: ModalDialog) => {
  return (
    <>
      {params.isOpen && (
        <Portal>
          <div className="modal-overlay">
            <div className="modal-window">
              <header
                className="modal-window__header
              "
              >
                {params.title}
              </header>
              <div className="modal-window__content">{params.children}</div>
              <footer className="modal-window__footer">
                <button className="button" onClick={params.onSubmit}>
                  Да
                </button>
                <button className="button " onClick={params.onCancel}>
                  Отмена
                </button>
              </footer>
            </div>
          </div>
        </Portal>
      )}
    </>
  );
};
