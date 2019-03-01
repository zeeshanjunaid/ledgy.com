// @flow

import React from 'react';

export const Accordion = props => <div className="accordion my-4" {...props} />;

export const FAQ = ({
  id,
  question,
  children
}: {|
  id: string,
  question: string,
  children: React.Node
|}) => {
  const isOpen = typeof window !== 'undefined' && window.top.location.hash === `#${id}`;
  return (
    <div className="card mb-0">
      <h6 className="card-title mt-0 bg-white" id={id}>
        <a className={!isOpen ? 'collapsed' : ''} data-toggle="collapse" href={`#${id}-body`}>
          {question}
        </a>
      </h6>
      <div id={`${id}-body`} className={`collapse ${isOpen ? 'show' : ''}`}>
        <div className="card-body py-1">{children}</div>
      </div>
    </div>
  );
};
