import { FunctionComponent, h } from 'preact';

interface LayoutProps {
  id?: string;
  title: string;
  alternate?: boolean;
}

const ProjectLayout: FunctionComponent<LayoutProps> = ({
  id,
  title,
  alternate = false,
  children,
}) => {
  return (
    <div
      id={id}
      className={
        'p-8 md:px-16 2xl:px-64 3xl:px-96 md:py-8 ' +
        'md:flex md:flex-row md:space-x-5 ' +
        (alternate ? 'bg-gray-800' : 'bg-gray-200')
      }
    >
      <h2
        className={
          'font-montserrat font-bold text-4xl ' +
          'text-center md:text-right pb-8 md:w-1/5 flex-none ' +
          (alternate ? 'text-white' : 'text-black')
        }
      >
        {title}
      </h2>
      <div className="hidden md:block md:w-1 rounded-full bg-gray-500" />
      <div className="flex flex-col space-y-2 grow">{children}</div>
    </div>
  );
};

export default ProjectLayout;
