interface HeroSectionProps {
  headline: string;
  description: string;
  primaryCtaText: string;
  secondaryCtaText: string;
  imageUrl: string;
  imageAlt: string;
}

export default function HeroSection({
  headline,
  description,
  primaryCtaText,
  secondaryCtaText,
  imageUrl,
  imageAlt,
}: HeroSectionProps) {
  return (
    <section className="flex flex-col items-center py-12 bg-white max-md:px-5">
      <div className="w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src={imageUrl}
              alt={imageAlt}
              className="grow w-full aspect-[1.49] max-md:mt-6 max-md:max-w-full"
            />
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto text-base font-semibold tracking-normal max-md:mt-10 max-md:max-w-full">
              <h1 className="text-5xl tracking-normal leading-[67.6px] text-primary-500 max-md:max-w-full max-md:text-4xl">
                {headline}
              </h1>
              <p className="mt-4 leading-6 text-primary-500 max-md:max-w-full">
                {description}
              </p>
              <div className="flex gap-5 pr-20 mt-8 leading-[150%] max-md:flex-wrap max-md:pr-5">
                <button className="justify-center px-6 py-4 text-primary-500 border-2 border-primary-500 border-solid rounded-[160px] max-md:px-5">
                  {secondaryCtaText}
                </button>
                <button className="justify-center px-6 py-4 text-white bg-primary-500 rounded-[160px] max-md:px-5">
                  {primaryCtaText}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
