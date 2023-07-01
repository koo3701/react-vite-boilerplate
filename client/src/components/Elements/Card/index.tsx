import { tv } from 'tailwind-variants';

const card = tv({
  base: 'p-8',
});

export type CardPropsType = {
  className?: string;
  children: React.ReactNode;
};
export const Card = ({ className, children }: CardPropsType) => (
  <div className={card({ className })}>{children}</div>
);
