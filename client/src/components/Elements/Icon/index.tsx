import { tv } from 'tailwind-variants';

const icon = tv({
  base: 'will-change-[filter]',
  variants: {
    size: {
      sm: 'h-20 p-3',
      md: 'h-36 p-6',
      lg: 'h-56 p-9',
    },
  },
});

export type IconPropsType = {
  className?: string;
  src: string;
  alt: string;
  size: keyof (typeof icon.variants)['size'];
};
export const Icon = ({ src, alt, size, className }: IconPropsType) => (
  <img src={src} className={icon({ className, size })} alt={alt} />
);
