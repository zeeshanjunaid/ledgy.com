import React, { useEffect } from 'react';
import { graphql } from 'gatsby';
import { i18n } from '@lingui/core';

import { dynamicI18n, loadScript } from '../helpers';
import { PageHeader } from '../components';
import { Title } from './utils';

let iframe: null | UntypedObject;

const loadApplicationForm = async (greenhouseId: string) => {
  if (!window.Grnhse) {
    await loadScript('https://boards.eu.greenhouse.io/embed/job_board/js?for=ledgy');
  }
  iframe = window.Grnhse?.Iframe.load(greenhouseId);
};

const unloadApplicationForm = () => {
  if (iframe) iframe.htmlElement = null;
};

const decodeContent = (content: string): string =>
  content
    .replace(/&gt;/g, '>')
    .replace(/&lt;/g, '<')
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&');

const JobPage = ({ data }: Props & { data: { greenhouseJob: GreenhouseJobProps } }) => {
  const { title, content, gh_Id, location } = data.greenhouseJob;
  if (!data) return null;
  const buttonUrl = typeof window === 'object' ? `${window.location.pathname}#apply` : undefined;
  useEffect(() => {
    loadApplicationForm(gh_Id);
    return unloadApplicationForm;
  }, []);

  return (
    <div>
      <Title
        title={dynamicI18n(title)}
        section={i18n._('Career')}
        description={dynamicI18n(location.name)}
      />
      <PageHeader
        title={dynamicI18n(title)}
        subtitle={dynamicI18n(location.name)}
        textCenter
        buttonText="Apply for this job"
        buttonUrl={buttonUrl}
      />
      <div className="container container-small">
        <div className="d-flex justify-content-center mb-4 mb-lg-5">
          <div dangerouslySetInnerHTML={{ __html: decodeContent(content) }} className="markdown" />
        </div>
        <div className="d-flex justify-content-center mb-4 mb-lg-5" id="apply">
          <div id="grnhse_app" className="w-100 markdown" />
        </div>
      </div>
    </div>
  );
};

export default JobPage;

export const jobPageQuery = graphql`
  query ($id: String!) {
    greenhouseJob(id: { eq: $id }) {
      ...GreenhouseJobFragment
    }
  }
`;
