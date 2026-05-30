import { cn } from "@/lib/cn";

type CardProps = {
  className?: string;
  children: React.ReactNode;
};

export default function Card({ className, children }: CardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-xl border border-outline-variant hover:-translate-y-1 transition-all duration-300",
        className
      )}
    >
      {children}
    </div>
  );
}
