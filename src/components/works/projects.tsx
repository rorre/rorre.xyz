import { FunctionalComponent } from 'preact';
import Project from '../general/project';
import ProjectLayout from './layout';

const Projects: FunctionalComponent = () => {
  return (
    <ProjectLayout id="projects" title="Projects">
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
        tech={['python']}
        favorite
      />
      <Project
        title="Euca"
        description="zod-like validator library in Typescript, fully type-safe."
        tech={['typescript']}
        github="https://github.com/rorre/euca"
        favorite
      />
      <Project
        title="Liku"
        description="Python HTML templating, inspired by modern Web Development."
        tech={['python']}
        github="https://github.com/rorre/liku"
        favorite
      />
      <Project
        title="Flyme OS for Infinix Hot 2"
        description="Officially supported Meizu's Flyme OS ported to Infinix Hot 2 using patchrom."
        tech={['android', 'java']}
        github="https://github.com/rorre/Flyme_X510-cm"
        favorite
      />
      <Project
        title="frames2osb"
        description="Converts frames (or video) into osu!storyboard with QuadTree data structure."
        tech={['python']}
        github="https://github.com/rorre/frames2osb"
        favorite
      />
      <Project
        title="osu! Difficulty Calculator IPC"
        description="An external program to run an IPC server that interacts with osu! stable client to provide new difficulty calculator."
        tech={['rust']}
        github="https://github.com/rorre/osu-ipc-rust"
        favorite
      />

      <Project
        title="KATALY"
        description="KATALY is a clone of WORDLE with Indonesian words."
        image="/assets/kataly.png"
        site="https://kataly.rorre.xyz/"
        github="https://github.com/rorre/KATALY"
        tech={['react', 'typescript']}
      />
      <Project
        title="Tutor Angkatan Bakung"
        description="A collaborative site for people in University of Indonesia's Faculty of Computer Science to open and organize tutor events."
        tech={['python', 'fastapi', 'node', 'typescript', 'nextjs']}
        github="https://github.com/rorre/frames2osb"
        site="https://ta.rorre.xyz/"
      />
      <Project
        title="osu! Discussion Votes"
        description="A tampermonkey script and server to add up/downvote functionality in discussion pages."
        tech={['golang', 'typescript']}
        github="https://github.com/rorre/osu-discussion-votes"
      />
      <Project
        title="DDPValidator"
        description="A tool for people in 2021 class of Programming Basics in University of Indonesia's Faculty of Computer Science to check their assignment if it is up to specs."
        tech={['python']}
        github="https://github.com/rorre/DDPValidator"
      />
      <Project
        title="ModRequests"
        description="Personal website to organize osu! Beatmap Nominator mod requests and nominations."
        tech={['python', 'flask']}
        github="https://github.com/rorre/ModRequests"
      />
      <Project
        title="Phillip"
        description="Event-driven library to subscribe to osu! beatmapset feeds."
        tech={['python']}
        github="https://github.com/rorre/Phillip"
        site="https://rorre.github.io/Phillip/"
      />
    </ProjectLayout>
  );
};

export default Projects;
