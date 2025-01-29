import MagicButton from "@/components/MagicButton";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

export const Contact = () => {
  return (
    <div className="py-12" id="contact">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-400 to-emerald-200 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-bold text-2xl md:text-3xl">Let&apos;s Connect</h2>
              <p className="text-sm md:text-base mt-2">
                Have an open role you think I would be a great fit for? Or just
                want to chat? Please don&apos;t hesitate to reach out!
              </p>
            </div>
            <div>
              <a href="mailto:zalavadiyamrunali@gmail.com">
                <MagicButton
                  title="Contact Me"
                  icon={<ArrowUpRightIcon className="size-4" />}
                  position="right"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
