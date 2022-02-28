import {
  SiFastapi,
  SiFlask,
  SiNextdotjs,
  SiPostgresql,
  SiRedis,
  SiStrapi,
  SiTypescript,
} from 'react-icons/si';

import {
  IoLogoJavascript,
  IoLogoNodejs,
  IoLogoPython,
  IoLogoReact,
} from 'react-icons/io5';

import { IconBaseProps, IconType } from 'react-icons';
import { FunctionComponent, h } from 'preact';

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
  fastapi: SiFastapi,
  typescript: SiTypescript,
  javascript: IoLogoJavascript,
  strapi: SiStrapi,
};

interface IconRowProps extends IconBaseProps {
  tech: string[];
}

const IconRow: FunctionComponent<IconRowProps> = (props) => {
  return (
    <div className="flex flex-row space-x-2">
      {props.tech.map((name) => {
        let Component = iconMapping[name];
        return (
          <Component title={name[0].toUpperCase() + name.slice(1)} {...props} />
        );
      })}
    </div>
  );
};

export { iconMapping, IconRow };
