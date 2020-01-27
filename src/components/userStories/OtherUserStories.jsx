// @flow

import React from 'react';
import { Trans } from '@lingui/react';
import sampleSize from 'lodash/sampleSize';

import { UserStoryCard } from './UserStoryCard';

export const OtherUserStories = ({ userStories }: {| userStories: UserStory[] |}) => {
  if (userStories.length === 0) return null;
  return (
    <>
      <h4 className="m-5 text-center">
        <Trans>More Stories from Ledgy Users</Trans>
      </h4>
      <div className="d-flex flex-row align-items-center justify-content-center">
        {sampleSize(userStories, 3).map(userStory => (
          <div className="col-md-4">
            <UserStoryCard userStory={userStory} />
          </div>
        ))}
      </div>
    </>
  );
};
