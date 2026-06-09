interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
}

const HEADING_STYLES = {
  1: "font-display font-semibold text-display-xl text-balance leading-none tracking-[-0.03em]",
  2: "font-display font-semibold text-display-lg text-balance leading-none tracking-[-0.025em]",
  3: "font-display font-semibold text-display-sm text-balance leading-none tracking-[-0.015em]",
  4: "font-display font-semibold text-body-lg text-balance leading-snug tracking-[-0.01em]",
  5: "font-display font-semibold text-body-sm text-balance leading-snug",
  6: "font-display font-semibold text-label text-balance leading-snug",
} as const;

export function Heading({ level = 1, children, className = "" }: HeadingProps) {
  const combinedClassName = `${HEADING_STYLES[level]} ${className}`;
  const Tag = `h${level}` as keyof React.JSX.IntrinsicElements;
  
  return (
    <Tag className={combinedClassName}>
      {children}
    </Tag>
  );
}