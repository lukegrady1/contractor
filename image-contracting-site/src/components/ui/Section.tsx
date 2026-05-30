import { cn } from "@/lib/cn";

type SectionProps = {
  className?: string;
  children: React.ReactNode;
  id?: string;
  bg?: string;
};

export default function Section({ className, children, id, bg }: SectionProps) {
  return (
    <section id={id} className={cn("py-[120px] px-5 md:px-16", bg, className)}>
      {children}
    </section>
  );
}
