import { FunctionalComponent, h } from 'preact';
import Project from '../general/project';
import ProjectLayout from './layout';

const Works: FunctionalComponent = () => {
  return (
    <ProjectLayout id="works" title="Works" alternate>
      <Project
        title="Open House Fasilkom UI 2021"
        description="Open House Fasilkom UI is an event where Computer Science students of University of Indonesia introduces their faculty to highschool students."
        image="/assets/oh.jpg"
        role="Web Developer"
        roles={['Develops front-end of landing page and staff recruitment']}
        site="https://oh.cs.ui.ac.id/"
        datetime="July 2021 - November 2021"
        tech={['node', 'react', 'nextjs']}
      />
      <Project
        title="PERAK 2022"
        description="PERAK is an internal event at Computer Science Faculty in University of Indonesia to bond together in various game events."
        image="/assets/perak.png"
        role="Web Developer"
        roles={[
          'Implements group invitational code with timeout using Redis',
          "Part of 'Experienced Staff' to aid staffs with code helps",
          'Reviews code from other staffs before merging',
        ]}
        site="https://perak.cs.ui.ac.id/"
        datetime="December 2021 - Present"
        tech={['node', 'react', 'nextjs', 'redis']}
      />
    </ProjectLayout>
  );
};

export default Works;
