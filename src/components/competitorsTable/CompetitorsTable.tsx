import { Section } from '../utils';
import React from 'react';

import logo from '../../img/logo.png';
import { COMPARISON_CELL_CSS } from './TableRow';
import { TableSection } from './TableSection';
import { isMobile } from '../../helpers';

export const CompetitorsTable = (table: CompetitorTableProps) => {
  const { header, tableSection: tableSections, competitorName } = table;
  const logoWidth = isMobile() ? 90 : 141;

  return (
    <Section className="bg-white">
      <h2 className="text-center p-4 pb-8">{header}</h2>
      <div className={`d-flex flex-row competitor-table-row`}>
        <div></div>
        <div className={`pb-4 ${COMPARISON_CELL_CSS}`}>
          <img className="navbar-logo" src={logo} width={logoWidth} />
        </div>
        <div className={`pb-4 text-gray-neutral ${COMPARISON_CELL_CSS}`}>
          <h4>{competitorName}</h4>
        </div>
      </div>
      <div className="d-flex flex-column">
        {tableSections.map(({ title, rows }, indx) => (
          <TableSection key={indx} rows={rows} title={title} />
        ))}
      </div>
    </Section>
  );
};
