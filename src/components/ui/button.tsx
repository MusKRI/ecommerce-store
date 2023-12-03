import { forwardRef } from "react";

import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { className, children, disabled, type = "button", ...rest } = props;

  return (
    <button
      ref={ref}
      {...rest}
      className={cn(
        `w-auto rounded-full bg-black border-transparent py-3 px-5 disabled:cursor-not-allowed disabled:opacity-50 text-white font-semibold hover:opacity-75 transition`,
        className
      )}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
