import { Fragment, FunctionalComponent, h } from 'preact';

const Links: FunctionalComponent = () => {
  return (
    <div id="links" className="py-8 bg-gray-800 text-white">
      <div className="flex flex-col items-center space-y-4">
        <div className="flex flex-row space-x-4 justify-center">
          <a href="https://github.com/rorre">
            <i className="fab fa-github fa-2x opacity-80"></i>
          </a>
          <a href="https://www.linkedin.com/in/rendyak/">
            <i className="fab fa-linkedin fa-2x opacity-80"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Links;
