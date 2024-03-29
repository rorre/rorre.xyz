import {
  SiAndroid,
  SiDocker,
  SiFastapi,
  SiFlask,
  SiGo,
  SiNextdotjs,
  SiPostgresql,
  SiRedis,
  SiRust,
  SiStrapi,
  SiTypescript,
} from 'react-icons/si';

import {
  IoLogoJavascript,
  IoLogoNodejs,
  IoLogoPython,
  IoLogoReact,
} from 'react-icons/io5';

import { BiLogoJava } from 'react-icons/bi';

import { IconBaseProps, IconType } from 'react-icons';
import { FunctionComponent } from 'preact';

type IconTypes = {
  [key in string]: IconType;
};

const iconMapping = {
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
  rust: SiRust,
  golang: SiGo,
  docker: SiDocker,
  java: BiLogoJava,
  android: SiAndroid,
} satisfies IconTypes;

type IconKeys = keyof typeof iconMapping;
interface IconRowProps extends IconBaseProps {
  tech: IconKeys[];
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
export type { IconKeys };
