// @flow

import React, { useState } from 'react';
import { Trans } from '@lingui/react';

import { Modal } from './Modal';
import { RequestDemoForm } from './RequestDemoForm';
import { Button } from './Button';
import { useModal } from './lib';
import { track } from '../helpers';

export const RequestDemoModal = ({ buttonClassName }: {| buttonClassName: string |}) => {
  const [isDemoRequested, setDemoRequested] = useState(false);
  const [isOpen, toggle] = useModal();
  const onClick = () => {
    track('getDemo.open');
    toggle();
  };

  return (
    <>
      <Button onClick={onClick} className={buttonClassName}>
        <Trans>Get a Demo</Trans>
      </Button>
      <Modal
        isOpen={isOpen}
        close={toggle}
        title={
          isDemoRequested ? (
            <Trans>Thank you for your interest!</Trans>
          ) : (
            <Trans>Request a demo</Trans>
          )
        }
      >
        <RequestDemoForm
          isDemoRequested={isDemoRequested}
          setDemoRequested={setDemoRequested}
          toggle={toggle}
        />
      </Modal>
    </>
  );
};
