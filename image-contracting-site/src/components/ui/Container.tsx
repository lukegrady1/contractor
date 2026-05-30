import { cn } from "@/lib/cn";

type ContainerProps = {
  className?: string;
  children: React.ReactNode;
};

export default function Container({ className, children }: ContainerProps) {
  return <div className={cn("max-w-7xl mx-auto", className)}>{children}</div>;
}
