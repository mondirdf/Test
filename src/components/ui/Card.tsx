import { ReactNode } from 'react';

type CardProps = {
  title: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
};

export default function Card({ title, eyebrow, children, className = '' }: CardProps) {
  return (
    <article className={`card ${className}`.trim()}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h3>{title}</h3>
      <div>{children}</div>
    </article>
  );
}
