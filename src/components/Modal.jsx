/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// @flow

import React, { type Node } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import { Button } from './Button';

const getDocumentBody = () => (typeof document !== 'undefined' ? document.body : null);

const closeWithOutsideClick = (e: SyntheticInputEvent<HTMLInputElement>, close: () => void) => {
  e.stopPropagation();
  close();
};

export const Modal = ({
  isOpen,
  close,
  title,
  children
}: {
  isOpen: boolean,
  close: () => void,
  title: Node,
  children: Node
}) => {
  const documentBody = getDocumentBody();
  return documentBody
    ? ReactDOM.createPortal(
        <CSSTransition in={isOpen} timeout={400} classNames="modal-transition" unmountOnExit>
          <div className="modal-wrapper" onClick={e => closeWithOutsideClick(e, close)}>
            <div className="modal-custom my-7 mx-auto" onClick={e => e.stopPropagation()}>
              <div className="modal-header-custom d-flex justify-content-between align-items-center bg-primary text-white px-4 py-3">
                <h5 className="m-0">{title}</h5>
                <Button className="modal-close" onClick={close}>
                  <span>&times;</span>
                </Button>
              </div>
              <div className="p-4">{children}</div>
            </div>
          </div>
        </CSSTransition>,
        documentBody
      )
    : null;
};
