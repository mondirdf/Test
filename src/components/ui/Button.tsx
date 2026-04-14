type ButtonProps = {
  label: string;
  href?: string;
  variant?: 'primary' | 'secondary';
};

export default function Button({ label, href = '#contact', variant = 'primary' }: ButtonProps) {
  return (
    <a className={`btn btn-${variant}`} href={href}>
      {label}
    </a>
  );
}
