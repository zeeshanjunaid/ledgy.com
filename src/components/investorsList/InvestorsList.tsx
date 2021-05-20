import React from 'react';

import { DynamicTrans } from '../utils';
import Img, { GatsbyImageFixedProps } from 'gatsby-image';
import { getInvestorDescriptions } from './getInvestorDescriptions';
import { getInvestorImages } from './getInvestorImages';

const investorList = [
  'btov',
  'creathor',
  'vipartners',
  'paul',
  'daniel',
  'luis',
  'myke',
  'cyrill',
  'luzius',
  'adrian',
  'elena',
];

const Investor = ({
  name,
  description,
  img,
}: {
  name: string;
  description: string;
  img: GatsbyImageFixedProps;
}) => (
  <div className="col-12 col-md-4 mb-4">
    {img && <Img {...img} alt={name} className="rounded-circle" />}
    <h6>{name}</h6>
    <p className="font-weight-light">{description}</p>
  </div>
);

export const InvestorsList = () => {
  const investorImages = getInvestorImages();
  const InvestorDescriptions = getInvestorDescriptions();
  const investorData = investorList.map((v) => [InvestorDescriptions[v], investorImages[v]]);
  return (
    <div className="container text-center">
      <h2>
        <DynamicTrans>Backed by</DynamicTrans>
      </h2>
      <div className="row justify-content-center my-5">
        {investorData.map(([investorProps, img]) => {
          const { name, description } = investorProps;
          return (
            <Investor name={name} description={description} img={img} key={`investor-${name}`} />
          );
        })}
      </div>
    </div>
  );
};
