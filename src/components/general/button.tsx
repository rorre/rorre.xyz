import { FunctionalComponent } from 'preact';
import type { ComponentChildren } from 'preact';

interface ButtonProps {
  onClick?: () => void;
  children: ComponentChildren;
  className?: string;
}

const Button: FunctionalComponent<ButtonProps> = ({
  onClick,
  children,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={'px-3 py-1.5 border text-sm rounded ' + className}
    >
      {children}
    </button>
  );
};

export default Button;
