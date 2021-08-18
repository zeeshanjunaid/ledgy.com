import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

import { Section } from './utils';
import { formatUrl } from './lib';

const getJobs = () =>
  useStaticQuery(graphql`
    query {
      allGreenhouseDepartment(sort: { fields: name }) {
        nodes {
          id
          greenhouseId
          name
          childrenGreenhouseJobPost {
            ...GreenhouseJobFragment
          }
        }
      }
    }
  `);

const Job = ({ title, greenhouseId, prefix }: GreenhouseJobProps & Prefix) => (
  <li key={greenhouseId}>
    <Link to={formatUrl(prefix, `/jobs/${greenhouseId}`)}>{title}</Link>
  </li>
);

const byTitle = (a: GreenhouseJobProps, b: GreenhouseJobProps) =>
  a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1;

const Department = ({
  name,
  childrenGreenhouseJobPost: jobs,
  prefix,
}: GreenhouseDepartmentProps & Prefix) => {
  if (!jobs.length) return null;

  return (
    <div className="col-12 col-md-4">
      <h4>{name}</h4>
      <ul>
        {jobs.sort(byTitle).map((job) => (
          <Job key={job.greenhouseId} prefix={prefix} {...job} />
        ))}
      </ul>
    </div>
  );
};

export const JobBoard = ({ prefix }: Prefix) => {
  const blogs = getJobs();
  const { nodes: departments } = blogs.allGreenhouseDepartment;
  return (
    <Section noPadding>
      <h2 className="text-center mb-5">Open Positions</h2>
      <div className="row justify-content-center mb-9">
        {departments.map((department: GreenhouseDepartmentProps) => (
          <Department key={department.id} prefix={prefix} {...department} />
        ))}
      </div>
    </Section>
  );
};
