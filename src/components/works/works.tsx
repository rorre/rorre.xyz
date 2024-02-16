import { FunctionalComponent } from 'preact';
import Project from '../general/project';
import ProjectLayout from './layout';

const Works: FunctionalComponent = () => {
  return (
    <ProjectLayout id="works" title="Works" alternate>
      <Project
        title="COMPFEST 15"
        description="COMPFEST is The biggest annual IT event organized by students of the Faculty of Computer Science, University of Indonesia."
        image="/assets/compfest.webp"
        role="CTF Committee"
        roles={[
          'Maintained the system used for CTF competition event',
          'Created web security, reverse engineering, and forensics challenges',
          'Managed multiple machines and its internal network in an Attack-Defense environment.' +
            ' <a href="https://blog.rorre.me/post/building-attack-defense-ctf" class="text-blue-500">Blog post</a>',
        ]}
        site="https://compfest.id/"
        datetime="Mar 2023 - Sept 2023"
        tech={['docker']}
      />

      <Project
        title="Computer Science Faculty of Universitas of Indonesia"
        description=""
        image="/assets/csui.png"
        role="Teaching Assistant for Programming Foundations 2"
        roles={[
          "Reviews students' assignments weekly",
          "Creates problemset for students' weekly assignment",
        ]}
        datetime="Jan 2023 - June 2023"
        tech={['java']}
      />

      <Project
        title="Open House Fasilkom UI 2022"
        description="Open House Fasilkom UI is an event where Computer Science students of University of Indonesia introduces their faculty to highschool students."
        image="/assets/oh.jpg"
        role="Person in Charge for Web Developer"
        roles={[
          'Led a team of 4 people',
          'Managed deployment of the website using containerized environment via Docker',
        ]}
        site="https://oh.cs.ui.ac.id/"
        datetime="Jul 2022 - Nov 2022"
        tech={['node', 'react', 'nextjs', 'typescript', 'docker']}
      />

      <Project
        title="Computer Science Faculty of Universitas of Indonesia"
        description=""
        image="/assets/csui.png"
        role="Teaching Assistant for Programming Foundations 1"
        roles={[
          "Reviews students' assignments weekly",
          "Creates problemset for students' weekly assignment",
        ]}
        datetime="August 2022 - December 2022"
        tech={['python']}
      />

      <Project
        title="COMPFEST 14"
        description="COMPFEST is The biggest annual IT event organized by students of the Faculty of Computer Science, University of Indonesia."
        image="/assets/compfest.webp"
        role="Web Developer"
        roles={[
          'Implements a general dashboard for partaking academy and competition events',
          'Develops a realtime worker for merchandise purchase to watch for pickup expiration event',
          'Maintains various internal services related to partnership and administration needs',
          'Implements scoring and submission system for website games with anti-tamper solution',
        ]}
        site="https://compfest.id/"
        datetime="May 2022 - December 2022"
        tech={['node', 'react', 'nextjs', 'redis', 'typescript']}
      />

      <Project
        title="PERAK 2022"
        description="PERAK is an internal event at Computer Science Faculty in University of Indonesia to bond together in various game events."
        image="/assets/perak.png"
        role="Web Developer"
        roles={[
          'Implements group invitational code with timeout using Redis',
          'Implements 3rd party games framing and score submission with cross window messaging',
          'Implements simple score tampering protection logic with AES and Redis',
        ]}
        site="https://perak.cs.ui.ac.id/"
        datetime="December 2021 - May 2022"
        tech={[
          'node',
          'react',
          'nextjs',
          'redis',
          'typescript',
          'strapi',
          'javascript',
        ]}
      />

      <Project
        title="Open House Fasilkom UI 2021"
        description="Open House Fasilkom UI is an event where Computer Science students of University of Indonesia introduces their faculty to highschool students."
        image="/assets/oh.jpg"
        role="Web Developer"
        roles={['Develops front-end of landing page and staff recruitment']}
        site="https://oh.cs.ui.ac.id/"
        datetime="July 2021 - November 2021"
        tech={['node', 'react', 'nextjs', 'typescript']}
      />
    </ProjectLayout>
  );
};

export default Works;
