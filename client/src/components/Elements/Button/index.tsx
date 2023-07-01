import { tv } from 'tailwind-variants';

const button = tv({
  base: [
    'px-5 py-2',
    'bg-zinc-300',
    'text-base font-medium',
    'rounded-lg',
    'border border-solid border-transparent transition-[border-color]',
    'cursor-pointer',
    'hover:border-blue-500',
    'focus:outline-4 focus-visible:outline-4',
    'dark:bg-black',
  ],
});

export type ButtonPropsType = {
  className?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
};
export const Button = ({ onClick, className, children }: ButtonPropsType) => (
  <button type="button" className={button({ className })} onClick={onClick}>
    {children}
  </button>
);
