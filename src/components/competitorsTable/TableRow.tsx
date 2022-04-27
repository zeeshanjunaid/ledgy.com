import React from 'react';
import { DynamicTrans } from '../utils';

export const COMPARISON_CELL_CSS =
  'flex-1 d-flex align-items-center justify-content-center text-center';

export const TableRow = ({ row }: { row: CompetitorTableRowProps }) => {
  const { text, ledgyStatus, competitorStatus, isComingSoonOnLedgy } = row;

  const isComingSoon = isComingSoonOnLedgy ? (
    <p className="text-gray-neutral">Coming Soon</p>
  ) : (
    <p className="cross"> &#10006;</p>
  );
  return (
    <div className={`d-flex flex-row bg-white competitor-table-row`}>
      <div className="p-1">
        <p>
          <DynamicTrans>{text}</DynamicTrans>
        </p>
      </div>
      <div className={COMPARISON_CELL_CSS}>
        {ledgyStatus ? <p className="check">&#10004;</p> : isComingSoon}
      </div>
      <div className={COMPARISON_CELL_CSS}>
        {competitorStatus ? <p className="check">&#10004;</p> : <p className="cross">&#10006;</p>}
      </div>
    </div>
  );
};
