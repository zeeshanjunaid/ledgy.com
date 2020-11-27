// @flow

import React from 'react';
import Img from 'gatsby-image';

import { useModal } from './lib';
import { Modal } from './Modal';

export const ImageModal = ({ imgProps }: { imgProps?: Image }) => {
  const [isOpen, toggle] = useModal();

  return (
    <>
      <div
        role="button"
        onClick={toggle}
        onKeyPress={toggle}
        tabIndex={0}
        className="expandable-image-wrapper"
      >
        <Img {...imgProps} />
      </div>
      <Modal
        isOpen={isOpen}
        close={toggle}
        size="lg"
        className="d-flex align-items-center justify-content-center"
      >
        <Img {...imgProps} />
      </Modal>
    </>
  );
};
