import React from 'react';
import { AuthorProps, getTeamMembersText } from './getTeamText';
import { Hr } from '../../layouts/utils';
import { TeamMembers } from './TeamMembers';
import { DynamicTrans } from '../utils';

import { getTeamMemberImages } from './getTeamImages';

export type TeamDataProps = [AuthorProps, DisableTypeScript][];

type InvestorProps = { name: string; description: string };

export type InvestorsDataProps = [InvestorProps, DisableTypeScript][];

export const AboutUs = ({ prefix }: { prefix: string }) => {
  const teamImages = getTeamMemberImages();

  const team = getTeamMembersText(prefix);
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

  return (
    <div className="container text-center">
      <h2>
        <DynamicTrans>Team</DynamicTrans>
      </h2>
      <TeamMembers teamData={teamData} />
      <Hr />
    </div>
  );
};
