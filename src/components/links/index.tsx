import { FunctionalComponent } from 'preact';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';

const Links: FunctionalComponent = () => {
  return (
    <div id="links" className="py-8 bg-gray-800 text-white">
      <div className="flex flex-col items-center space-y-4">
        <div className="flex flex-row space-x-4 justify-center opacity-80">
          <a href="https://github.com/rorre">
            <IoLogoGithub size={36} />
          </a>
          <a href="https://www.linkedin.com/in/rendyak/">
            <IoLogoLinkedin size={36} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Links;
