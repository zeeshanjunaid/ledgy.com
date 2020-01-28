// @flow

import React from 'react';
import { Trans } from '@lingui/react';
import sampleSize from 'lodash/sampleSize';

import { UserStoryCard } from './UserStoryCard';

export const OtherUserStories = ({ userStories }: {| userStories: UserStory[] |}) => {
  if (userStories.length === 0) return null;
  return (
    <>
      <h4 className="my-5 text-center">
        <Trans>More Stories from Ledgy Users</Trans>
      </h4>
      <div className="d-flex flex-row align-items-center justify-content-center">
        {sampleSize(userStories, 3).map(userStory => (
          <div key={userStory.id} className="col-md-4">
            <UserStoryCard userStory={userStory} />
          </div>
        ))}
      </div>
      <div className="row m-0 w-100 justify-content-center align-items-center">
        <a className="btn btn-xl btn-round btn-primary align-self-center" href="/user-stories">
          VIEW ALL
        </a>
      </div>
    </>
  );
};
