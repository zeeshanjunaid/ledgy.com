// @flow

import React, { useEffect } from 'react';
import { Trans } from '@lingui/react';

import { Modal } from './Modal';
import { RequestDemoForm } from './forms';
import { Button } from './Button';
import { useModal } from './lib';
import { track } from '../helpers';

export const RequestDemoModal = ({
  buttonClassName,
  location,
}: {|
  buttonClassName: string,
  location?: LocationProps,
|}) => {
  const [isOpen, toggle] = useModal();
  const onClick = () => {
    track('getDemo.open');
    toggle();
  };
  useEffect(() => {
    if (location && location.hash === '#getDemo') toggle();
  }, []);

  return (
    <>
      <Button onClick={onClick} className={buttonClassName}>
        <Trans>Get a Demo</Trans>
      </Button>
      <Modal isOpen={isOpen} close={toggle} title={<Trans>Request a demo of Ledgy</Trans>}>
        <RequestDemoForm />
      </Modal>
    </>
  );
};
