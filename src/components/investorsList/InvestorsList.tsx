import React from 'react';
import { AuthorProps } from '../teamMembers/getTeamText';

import { DynamicTrans } from '../utils';
import { Investor } from './Investors';
import { getInvestorImages } from '../../layouts/investorDetails';
import { getInvestorText } from './getInvestorText';

export type TeamDataProps = [AuthorProps, DisableTypeScript][];

export type InvestorProps = { name: string; description: string };

export type InvestorsDataProps = [InvestorProps, DisableTypeScript][];

export const InvestorsList = () => {
  const investorImages = getInvestorImages();

  const investors = getInvestorText();
  const investorsData: InvestorsDataProps = [
    [investors.btov, investorImages.btov],
    [investors.creathor, investorImages.creathor],
    [investors.vipartners, investorImages.vipartners],
    [investors.paul, investorImages.paul],
    [investors.daniel, investorImages.daniel],
    [investors.luis, investorImages.luis],
    [investors.myke, investorImages.myke],
    [investors.cyrill, investorImages.cyrill],
    [investors.luzius, investorImages.luzius],
    [investors.adrian, investorImages.adrian],
    [investors.elena, investorImages.elena],
  ];

  return (
    <div className="container text-center">
      <h2>
        <DynamicTrans>Team</DynamicTrans>
      </h2>
      <h2>
        <DynamicTrans>Backed by</DynamicTrans>
      </h2>
      <div className="row justify-content-center my-5">
        {investorsData.map(([investorProps, img]) => {
          const { name, description } = investorProps;
          return (
            <Investor name={name} description={description} img={img} key={`investor-${name}`} />
          );
        })}
      </div>
    </div>
  );
};
