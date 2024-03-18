import { MouseEventHandler } from 'react';

interface ButtonProps {
  type: "submit" | "button",
  text: string,
  variant: "primary" | "secondary",
}

export default function Button(props: ButtonProps) {
  const {type, text, variant} = props;
  const buttonClasses = variant === 'primary' ?
  'text-neutral-0 bg-primary-500' :
  'text-primary-500 border-primary-500';

  return(
    <button type={type} className={`${buttonClasses} justify-center px-6 py-4 border-2 border-solid rounded-[160px] max-md:px-5`}>{text}</button>
  );
}
