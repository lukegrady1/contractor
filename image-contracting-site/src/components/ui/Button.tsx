import { cn } from "@/lib/cn";

const variants = {
  primary:
    "bg-primary-container text-on-primary-container hover:-translate-y-1 shadow-md",
  secondary:
    "border-2 border-on-surface text-on-surface hover:bg-on-surface hover:text-white",
  ghost: "border-2 border-white/30 text-white hover:bg-white/10",
  white: "bg-white text-primary hover:-translate-y-1 shadow-lg",
} as const;

const sizes = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-8 py-4",
  lg: "px-10 py-5 text-lg",
} as const;

type ButtonProps = {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
  children: React.ReactNode;
} & (
  | ({ as?: "button" } & React.ButtonHTMLAttributes<HTMLButtonElement>)
  | ({ as: "a" } & React.AnchorHTMLAttributes<HTMLAnchorElement>)
);

export default function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-block rounded-xl font-semibold transition-all cursor-pointer",
    variants[variant],
    sizes[size],
    className
  );

  if (props.as === "a") {
    const { as, ...rest } = props;
    return (
      <a className={classes} {...rest}>
        {children}
      </a>
    );
  }

  const { as, ...rest } = props as { as?: "button" } & React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
