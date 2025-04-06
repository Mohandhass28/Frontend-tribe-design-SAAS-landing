import React, { ButtonHTMLAttributes } from "react";
import { cva } from "class-variance-authority";

const classes = cva("border rounded-full px-6 font-[600]", {
  variants: {
    variant: {
      primary: "bg-lime-400 text-neutral-950 border-lime-400",
      secondary: "border-white text-white bg-transparent",
    },
    size: {
      default: "h-12",
      sm: "h-12",
    },
  },
  defaultVariants: {
    size: "default",
  },
});
const Button = (
  props: {
    variant: "primary" | "secondary";
    size?: "sm" | "default";
  } & ButtonHTMLAttributes<HTMLButtonElement>
) => {
  const { variant, className, size, ...rest } = props;
  return <button className={classes({ variant, size, className })} {...rest} />;
};

export default Button;
