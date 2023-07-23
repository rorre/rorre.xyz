import { FunctionalComponent } from 'preact';
import Box from '../general/box';
// import { useEffect, useState } from 'preact/hooks';
// import { IoCode, IoLogoGithub } from 'react-icons/io5';

const About: FunctionalComponent = () => {
  // const [repoCount, setRepoCount] = useState(-1);

  // useEffect(() => {
  //   fetch('https://api.github.com/users/rorre')
  //     .then((r) => r.json())
  //     .then((res) => setRepoCount(res.public_repos));
  // }, []);

  return (
    <div id="about" className="py-8 bg-gray-200">
      <h2 className="font-montserrat font-bold text-3xl text-center pb-4">
        Overview
      </h2>
      <div
        className="px-8 sm:px-16 md:px-32 lg:px-64 xl:px-0 mx-auto container xl:!max-w-5xl font-assistant pb-4
                      grid grid-flow-row gap-4"
      >
        {/* <a href="https://github.com/rorre" target="_blank">
          <Box className="flex flex-col font-bold gap-1 relative justify-end h-full">
            <strong className="text-4xl text-teal-800">
              {repoCount == -1 ? '...' : repoCount}
            </strong>
            <p>Repositories</p>

            <i className="bottom-4 right-4 absolute">
              <IoLogoGithub size={32} />
            </i>
          </Box>
        </a> */}

        <Box className="flex flex-col gap-1 relative justify-end h-full">
          <strong className="text-2xl text-teal-800 font-bold">
            CTF Problem Setter + Technical Committee
          </strong>
          <p>COMPFEST 15</p>
          <strong className="font-bold">Current Work</strong>
        </Box>

        <Box className="flex flex-col gap-1 relative justify-end h-full">
          <strong className="text-2xl text-teal-800 font-bold">
            NetSOS Member
          </strong>
          <p>RISTEK Fasilkom UI</p>
          <strong className="font-bold">Current Organization</strong>
        </Box>
      </div>
    </div>
  );
};

export default About;
