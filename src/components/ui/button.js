import * as React from "react";

const buttonVariants = (variant, size) => {
  const base =
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

  const variants = {
    default: "bg-amber-500 text-white hover:bg-amber-600",
    destructive: "bg-red-500 text-white hover:bg-red-600",
    outline:
      "border border-gray-300 bg-white hover:bg-gray-50 hover:text-gray-900",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
    ghost: "hover:bg-gray-100 hover:text-gray-900",
    link: "text-amber-600 underline-offset-4 hover:underline",
  };

  const sizes = {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
    icon: "h-10 w-10",
  };

  return [
    base,
    variants[variant] || variants.default,
    sizes[size] || sizes.default,
  ].join(" ");
};

const Button = React.forwardRef(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <button
        className={`${buttonVariants(variant, size)} ${className || ""}`}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
