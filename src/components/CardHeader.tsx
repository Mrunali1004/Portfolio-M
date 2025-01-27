import { twMerge } from "tailwind-merge";

const CardHeader = ({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: string;
}) => {
  return (
    <div
      className={twMerge(
        "flex flex-col p-6 pb-4 md:py-8 md:pb-4 md:px-10",
        className
      )}
    >
      <div className="inline-flex items-center gap-2">
        <h3 className="font-bold text-3xl">{title}</h3>
      </div>
      <p className="text-sm lg:text-base max-w-xs text-white/80 mt-2">
        {description}
      </p>
    </div>
  );
};

export default CardHeader;
