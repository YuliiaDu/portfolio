import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export function SectionLabel({ children, className, dark }: SectionLabelProps) {
  return (
    <div className={cn("rule-label", dark && "text-dark-text [&::before]:bg-dark-border [&::after]:bg-dark-border", className)}>
      <span>{children}</span>
    </div>
  );
}
