import { twMerge } from "tailwind-merge";
import { ComponentPropsWithoutRef } from "react";

const Card = ({
  className,
  children,
  ...other
}: ComponentPropsWithoutRef<"div">) => {
  return (
    <div
      className={twMerge(
        "bg-gray-800/90 backdrop-blur rounded-3xl relative z-0 overflow-hidden after:content-[''] after:absolute after:inset-0 after:z-10 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/30 after:pointer-events-none",
        className
      )}
      {...other}
    >
      {children}
    </div>
  );
};

export default Card;
