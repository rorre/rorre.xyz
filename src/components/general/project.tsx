import { Fragment, FunctionComponent, h } from 'preact';
import { useState } from 'preact/hooks';
import Modal from './modal';

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  datetime?: string;
  site?: string;
  github?: string;
  role?: string;
  roles?: string[];
}

const Project: FunctionComponent<ProjectProps> = ({
  title,
  description,
  image,
  datetime,
  site,
  github,
  role,
  roles,
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Fragment>
      <div
        className="flex flex-col-reverse sm:flex-row justify-between
                 bg-white sm:space-x-2 rounded-md p-4 w-full"
        onClick={() => setShowModal(!showModal)}
      >
        <div className="flex flex-col pt-2 sm:pt-0">
          <p className="font-sans text-lg font-bold">{title}</p>
          <p className="font-assistant italic text-sm">
            {role} {datetime && '| ' + datetime}
          </p>
          <p className="font-assistant">{description}</p>

          <ul className="list-disc text-sm pl-5">
            {roles &&
              roles.map((value) => <li className="font-assistant">{value}</li>)}
          </ul>

          <div className="flex flex-row justify-between pt-2 mt-auto max-w-[10rem]">
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

        <div className="aspect-square max-w-[6rem] m-auto">
          <img src={image} className="rounded-full" />
        </div>
      </div>
    </Fragment>
  );
};

export default Project;
