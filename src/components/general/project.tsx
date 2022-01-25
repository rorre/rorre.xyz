import { Fragment, FunctionComponent, h } from 'preact';
import { useState } from 'preact/hooks';
import Modal from './modal';

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  site?: string;
  github?: string;
  roles?: string[];
  tech?: string[];
}

const Project: FunctionComponent<ProjectProps> = ({
  title,
  description,
  image,
  site,
  github,
  roles,
  tech,
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Fragment>
      <Modal setShow={setShowModal} show={showModal} title={title}>
        <div className="aspect-square max-w-[8rem] mx-auto">
          <img src={image} className="rounded-full" />
        </div>

        <div className="flex flex-row space-x-4 text-center mx-auto">
          {site && (
            <a
              href={site}
              onClick={(e) => e.stopPropagation()}
              className="font-sans font-bold text-sky-700
                           transition hover:underline hover:text-sky-600"
            >
              Site URL
            </a>
          )}
          {github && (
            <a
              href={github}
              onClick={(e) => e.stopPropagation()}
              className="font-sans font-bold text-sky-700
                           transition hover:underline hover:text-sky-600"
            >
              Repository
            </a>
          )}
        </div>

        <p className="font-assistant">{description}</p>

        <hr className="border border-gray-800 border-opacity-10" />

        <h3 className="font-sans font-bold">Roles</h3>
        <ul className="list-disc pl-4">
          {roles ? (
            roles.map((value) => <li className="font-assistant">{value}</li>)
          ) : (
            <li className="font-assistant">Unspecified</li>
          )}
        </ul>

        <hr className="border border-gray-800 border-opacity-10" />

        <h3 className="font-sans font-bold">Technologies Used</h3>
        <ul className="list-disc  pl-4">
          {tech ? (
            tech.map((value) => <li className="font-assistant">{value}</li>)
          ) : (
            <li className="font-assistant">Unspecified</li>
          )}
        </ul>
      </Modal>
      <div
        className="flex flex-col-reverse sm:flex-row justify-between
                 bg-white sm:space-x-2 rounded p-4 w-full cursor-pointer"
        onClick={() => setShowModal(!showModal)}
      >
        <div className="flex flex-col pt-2 sm:pt-0">
          <p className="font-sans text-lg font-bold">{title}</p>
          <p className="font-assistant text-sm sm:max-w-[16rem]">
            {description}
          </p>
          <div className="flex flex-row justify-between pt-2 mt-auto">
            {site && (
              <a
                href={site}
                onClick={(e) => e.stopPropagation()}
                className="font-sans font-bold text-sky-700
                           transition hover:underline hover:text-sky-600"
              >
                Site URL
              </a>
            )}
            {github && (
              <a
                href={github}
                onClick={(e) => e.stopPropagation()}
                className="font-sans font-bold text-sky-700
                           transition hover:underline hover:text-sky-600"
              >
                Repository
              </a>
            )}
          </div>
        </div>

        <div className="aspect-square max-w-[8rem] m-auto">
          <img src={image} className="rounded-full" />
        </div>
      </div>
    </Fragment>
  );
};

export default Project;
