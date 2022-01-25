import { FunctionalComponent, h } from 'preact';
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
      className={'p-2 border text-sm rounded ' + className}
    >
      {children}
    </button>
  );
};

export default Button;
