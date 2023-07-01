import { tv } from 'tailwind-variants';

const spinner = tv({
  base: 'animate-spin',
  variants: {
    size: {
      sm: 'h-4 w-4',
      md: 'h-8 w-8',
      lg: 'h-16 w-16',
      xl: 'h-24 w-24',
    },
    color: {
      light: 'text-white',
      primary: 'text-blue-600',
    },
  },
});

export type SpinnerPropsType = {
  className?: string;
  size?: keyof typeof spinner.variants.size;
  color?: keyof typeof spinner.variants.color;
};

export const Spinner = ({ className, size = 'md', color = 'primary' }: SpinnerPropsType) => (
  <>
    <svg
      className={spinner({ className, size, color })}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      data-testid="loading"
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
    <span className="sr-only">Loading</span>
  </>
);
