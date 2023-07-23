import { Fragment, FunctionalComponent } from 'preact';
import type { ComponentChildren } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

interface LoaderProps {
  children: ComponentChildren;
}

// This object exists just to aid react rendering stuff
const Loader: FunctionalComponent<LoaderProps> = ({ children }) => {
  const [isLoading, setLoading] = useState(true);
  const [isGone, setGone] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(false), 750);
    setTimeout(() => setGone(true), 1200);
  }, []);

  return (
    <Fragment>
      <div
        className={
          'w-screen h-screen bg-teal-800 z-50 fixed top-0 left-0  ' +
          'flex flex-col items-center justify-center transition-opacity duration-300 ' +
          (isLoading ? 'opacity-100 ' : 'opacity-0 ') +
          (isGone && 'hidden')
        }
      >
        <AiOutlineLoading3Quarters size={"3rem"} />
      </div>
      <div
        className={'z-0 ' + (isLoading && 'w-screen h-screen overflow-hidden')}
      >
        {children}
      </div>
    </Fragment>
  );
};

export default Loader;
