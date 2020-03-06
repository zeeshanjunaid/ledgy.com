// @flow

import React, { useState } from 'react';
import { Trans } from '@lingui/react';

import { Modal } from './Modal';
import { RequestDemoForm } from './RequestDemoForm';
import { Button } from './Button';
import { useModal } from './lib';

export const RequestDemoModal = ({ pricingPage = false }: {| pricingPage?: boolean |}) => {
  const [isDemoRequested, setDemoRequested] = useState(false);
  const [isOpen, toggle] = useModal();
  return (
    <>
      <Button
        onClick={toggle}
        className={pricingPage ? 'my-4' : 'my-sm-0 my-2 btn-xl d-inline  mx-1'}
        inverted={!pricingPage}
      >
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
