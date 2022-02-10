import { SiFlask, SiNextdotjs, SiPostgresql, SiRedis } from 'react-icons/si';
import { IoLogoNodejs, IoLogoPython, IoLogoReact } from 'react-icons/io5';
import { IconType } from 'react-icons';
import { Fragment, FunctionComponent, h } from 'preact';

type IconTypes = {
  [key in string]: IconType;
};

const iconMapping: IconTypes = {
  react: IoLogoReact,
  flask: SiFlask,
  node: IoLogoNodejs,
  redis: SiRedis,
  postgres: SiPostgresql,
  nextjs: SiNextdotjs,
  python: IoLogoPython,
};

interface IconRowProps {
  tech: string[];
}

const IconRow: FunctionComponent<IconRowProps> = ({ tech }) => {
  return (
    <div className="flex flex-row space-x-2">
      {tech.map((name) => {
        let Component = iconMapping[name];
        return <Component />;
      })}
    </div>
  );
};

export { iconMapping, IconRow };
