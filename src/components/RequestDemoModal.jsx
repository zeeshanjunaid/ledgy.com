// @flow

import React, { useState } from 'react';
import { Trans } from '@lingui/react';

import Modal from './Modal';
import { RequestDemoForm } from './RequestDemoForm';

export const RequestDemoModal = () => {
  const [isRequested, setRequested] = useState(false);
  return (
    <Modal
      id="demo-access"
      titleClassNames="text-white"
      title={
        isRequested ? <Trans>Thank you for your interest!</Trans> : <Trans>Request a demo</Trans>
      }
      buttonText={<Trans>Get a Demo</Trans>}
      buttonClassName="btn-demo btn-outline-light d-inline btn-xl mx-1 my-2 my-sm-0"
      hideFooter
    >
      <RequestDemoForm setRequested={setRequested} />
    </Modal>
  );
};
