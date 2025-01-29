import Card from "@/components/Card"
import SectionHeader from "@/components/SectionHeader"
import { testimonials } from "@/data"
import Image from "next/image"
import { Fragment } from "react"

export const Testimonials = () => {
  return (
    <div className="py-12">
      <div className="container">
        <SectionHeader
          title="What Others Say About Me"
          subheader="Recommendations"
          description="See what my teammates have to say about
        my work and their experiences working with me."
        />
        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex gap-8 pr-8 flex-none animate-moveLeft [animation-duration:90s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {testimonials.map((testimonial) => (
                  <Card
                    key={testimonial.name}
                    className="max-w-xs md:max-w-md p-6 md:p-8 hover:scale-105 transition duration-300"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="size-14 bg-gray-700 inline-flex items-center justify-center flex-shrink-0 rounded-full">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="rounded-full"
                        />
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-white/60">
                          {testimonial.position}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 text-sm md:text-base md:mt-6">
                      {testimonial.text}
                    </p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

