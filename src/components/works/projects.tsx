import { FunctionalComponent, h } from 'preact';
import Project from '../general/project';
import ProjectLayout from './layout';

const Projects: FunctionalComponent = () => {
  return (
    <ProjectLayout id="projects" title="Projects">
      <Project
        title="KATALY"
        description="KATALY is a clone of WORDLE with Indonesian words."
        image="/assets/kataly.png"
        site="https://kataly.rorre.xyz/"
        github="https://github.com/rorre/KATALY"
        tech={['react']}
      />
      <Project
        title="BNStats"
        description="BNStats is a site to look at various statistical information regarding osu!'s Beatmap Nominator activity."
        image="/assets/bnstats.png"
        roles={[
          'Implements routines to fetch to osu! for nomination data',
          'Experimented with scoring system together with Naxess to quantitize activity based on requirements',
        ]}
        github="https://github.com/rorre/BNStats"
        site="https://bnstats.rorre.xyz/"
        tech={['python', 'postgres']}
      />
    </ProjectLayout>
  );
};

export default Projects;
