import React from 'react';
import { DynamicTrans } from '../utils';

export const AddressAndVat = () => (
  <>
    <h6>Ledgy AG</h6>
    <p>
      Forchstrasse 60
      <br />
      8008 Zürich
      <br />
      <DynamicTrans>Switzerland</DynamicTrans>
    </p>
    <h6>
      <DynamicTrans>VAT number</DynamicTrans>
    </h6>
    <p>CHE‑261.454.963 MWST</p>
  </>
);
