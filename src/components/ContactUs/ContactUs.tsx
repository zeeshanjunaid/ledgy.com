import React from 'react';
import { AddressAndVat } from './AddressAndVat';
import { Emails } from './Emails';
import { ManagingDirectors } from './ManagingDirectors';

export const ContactUs = () => (
  <div className="container bg-gray h-full p-5 imprint">
    <div className="row">
      <div className="col-md-6">
        <AddressAndVat />
      </div>
      <div className="col-md-3">
        <div className="d-flex flex-column flex-lg-row">
          <Emails />
          <ManagingDirectors />
        </div>
      </div>
    </div>
  </div>
);
