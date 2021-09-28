import React from 'react';
import { DynamicTrans } from '../utils';

export const AddressAndVat = () => (
  <>
    <h6>Ledgy AG</h6>
    <p>
      Fraumünsterstrasse 16
      <br />
      8001 Zürich
      <br />
      <DynamicTrans>Switzerland</DynamicTrans>
    </p>
    <h6>
      <DynamicTrans>VAT number</DynamicTrans>
    </h6>
    <p>CHE‑261.454.963 MWST</p>
  </>
);
