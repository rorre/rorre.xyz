import { FunctionalComponent } from 'preact';
import { useRef } from 'preact/hooks';
import type { ComponentChildren } from 'preact';

interface ModalProps {
  show: boolean;
  setShow: (arg0: boolean) => void;
  title: string;
  children?: ComponentChildren;
  className?: string;
}

const Modal: FunctionalComponent<ModalProps> = ({
  show,
  setShow,
  title,
  children,
  className,
}) => {
  const outerModal = useRef<HTMLDivElement>(null);
  const innerModal = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={outerModal}
      className={
        `top-0 fixed left-0 bg-black bg-opacity-40 p-8 w-screen h-screen
                 px-4 sm:px-16 md:px-32 lg:px-64 ` +
        (show ? 'block opacity-100' : 'hidden opacity-0')
      }
      onClick={(event) => {
        if (event.target == outerModal.current) {
          setShow(false);
        }
      }}
    >
      <div
        ref={innerModal}
        className="relative bg-gray-200 p-4 animate-[falling_0.4s] container xl:!max-w-5xl mx-auto"
      >
        <span
          className="top-2 right-3 text-4xl absolute cursor-pointer"
          onClick={() => setShow(false)}
        >
          &times;
        </span>
        <div className="flex flex-col space-y-4">
          <p className="font-sans font-bold text-lg">{title}</p>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
