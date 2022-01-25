import { FunctionalComponent, h } from 'preact';
import Project from '../general/project';

const Works: FunctionalComponent = () => {
  return (
    <div
      id="works"
      className="p-8 md:px-16 2xl:px-64 3xl:px-96 md:py-8 bg-gray-800"
    >
      <h2 className="font-montserrat font-bold text-3xl text-center pb-8 text-white">
        Works
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-x-4">
        <Project
          title="Open House Fasilkom UI 2021"
          description="Open House Fasilkom UI is an event where Computer Science students of University of Indonesia introduces their faculty to highschool students."
          image="/assets/oh.jpg"
          roles={['Develops front-end of landing page and staff recruitment']}
          tech={['Next.js', 'React']}
          site="https://perak.cs.ui.ac.id/"
        />
        <Project
          title="PERAK 2022"
          description="PERAK is an internal event at Computer Science Faculty in University of Indonesia to bond together in various game events."
          image="/assets/perak.png"
          roles={[
            'Full stack web developer',
            'Implements group invitational code with timeout using Redis',
            "Part of 'Experienced Staff' to aid staffs with code helps",
            'Reviews code from other staffs before merging',
          ]}
          tech={['Next.js', 'Strapi v4', 'Redis', 'PostgresQL']}
          site="https://perak.cs.ui.ac.id/"
        />
        <Project
          title="BNStats"
          description="BNStats is a site to look at various statistical information regarding osu!'s Beatmap Nominator activity."
          image="/assets/bnstats.png"
          roles={[
            'Full stack web developer',
            'Implements routines to fetch to osu! for nomination data',
            'Experimented with scoring system together with Naxess to quantitize activity based on requirements',
          ]}
          tech={['Uvicorn', 'Starlette', 'Tortoise DB', 'PostgresQL']}
          github="https://github.com/rorre/BNStats"
          site="https://bnstats.rorre.xyz/"
        />
      </div>
    </div>
  );
};

export default Works;
