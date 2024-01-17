import { FunctionComponent } from 'preact';
import { IconKeys, IconRow } from './icons';
import Box from './box';

interface ProjectProps {
  title: string;
  description: string;
  image?: string;
  tech: IconKeys[];
  datetime?: string;
  site?: string;
  github?: string;
  role?: string;
  roles?: string[];
  favorite?: boolean;
}

const Project: FunctionComponent<ProjectProps> = ({
  title,
  description,
  image,
  tech,
  datetime,
  site,
  github,
  role,
  roles,
  favorite,
}) => {
  return (
    <Box className="flex flex-col-reverse sm:flex-row justify-between w-full sm:space-x-2 relative overflow-hidden md:pr-6">
      {favorite && (
        <div class="absolute right-0 top-0 h-8 w-8">
          <div class="absolute transform rotate-45 bg-yellow-500 flex items-center justify-center text-white font-semibold py-2 right-[-28px] top-[-4px] w-[90px] text-sm">
            <svg
              class="w-6 h-6 text-white ms-1 transform rotate-[27deg]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          </div>
        </div>
      )}

      <div className="flex flex-col pt-2 sm:pt-0">
        <div className="flex flex-col-reverse sm:flex-row sm:space-x-2 items-center">
          <p className="font-sans text-lg font-bold">{title}</p>
          <IconRow tech={tech} />
        </div>

        <p className="font-assistant italic text-sm">
          {role} {datetime && '| ' + datetime}
        </p>
        <p className="font-assistant">{description}</p>

        <ul className="list-disc text-sm pl-5">
          {roles &&
            roles.map((value) => (
              <li
                className="font-assistant"
                dangerouslySetInnerHTML={{ __html: value }}
              ></li>
            ))}
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

      {image && (
        <div className="aspect-square max-w-[6rem] m-auto">
          <img src={image} className="rounded-full" />
        </div>
      )}
    </Box>
  );
};

export default Project;
