import React from 'react';
import { AuthorProps, getTeamImages, getWholeTeam } from './team';
import { Hr } from '../../layouts/utils';
import { TeamMembers } from './TeamMembers';
import { DynamicTrans } from '../utils';
import { Investor } from './Investors';
import { getInvestorImages } from '../../layouts/investorDetails';

export type TeamDataProps = [AuthorProps, DisableTypeScript][];

type InvestorProps = { name: string; description: string };

export type InvestorsDataProps = [InvestorProps, DisableTypeScript][];

export const AboutUs = ({ prefix }: { prefix: string }) => {
  const teamImages = getTeamImages();
  const investorImages = getInvestorImages();

  const team = getWholeTeam(prefix);
  const teamData: TeamDataProps = [
    [team.timo, teamImages.timo],
    [team.yoko, teamImages.yoko],
    [team.ben, teamImages.ben],
    [team.oriol, teamImages.oriol],
    [team.jules, teamImages.jules],
    [team.marius, teamImages.marius],
    [team.jahlela, teamImages.jahlela],
    [team.spela, teamImages.spela],
    [team.armon, teamImages.armon],
    [team.karime, teamImages.karime],
    [team.ermias, teamImages.ermias],
    [team.tamas, teamImages.tamas],
    [team.mariana, teamImages.mariana],
    [team.xiao, teamImages.xiao],
    [team.marina, teamImages.marina],
    [team.catarina, teamImages.catarina],
    [team.nicolas, teamImages.nicolas],
    [team.luna, teamImages.luna],
  ];

  const investors = {
    btov: {
      name: 'btov Partners',
      description: 'Europe’s symbiosis of early-stage VC funds and private investor network',
    },
    creathor: {
      name: 'Creathor Ventures',
      description: 'Backing the creators of our future since 1984',
    },
    vipartners: {
      name: 'VI Partners',
      description: 'Healthcare & technology venture capital since 2001',
    },
    paul: {
      name: 'Dr. Paul E. Sevinç',
      description: 'Entrepreneur, technologist, founder of Doodle.com',
    },
    daniel: {
      name: 'Daniel Gutenberg',
      description: 'One of the most active Swiss early-stage angel investors',
    },
    luis: {
      name: 'Luis Cabiedes',
      description: 'Leading Spanish investor in early-stage technology startups',
    },
    myke: {
      name: 'Myke Näf',
      description: 'Entrepreneur, business angel, founder of Doodle.com',
    },
    cyrill: {
      name: 'Cyrill Osterwalder',
      description: 'Digital entrepreneur and investor. Security, crypto & privacy exper',
    },
    luzius: {
      name: 'Luzius Meisser',
      description: 'Founder of Meisser Economics, Bitcoin Association Switzerland, and Wuala',
    },
    adrian: {
      name: 'Adrian Bührer',
      description: 'Investor & consultant (Farmy.ch, Flatfox.ch), founder of Students.ch',
    },
    elena: {
      name: 'Elena Walder-Schiavone',
      description:
        'M&A and private equity lawyer with a focus on start-up legal advise, Smartuplaw.ch',
    },
  };
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
      <TeamMembers teamData={teamData} />
      <Hr />
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
