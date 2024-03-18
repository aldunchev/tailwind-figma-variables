/**
 * Card component.
 */

interface CardProps {
  src: string;
  alt: string;
  eyebrow: string;
  headline: string;
  description: string;
  action: string;
}

export default function Card({ src, alt, eyebrow, headline, description, action }: CardProps) {
  return (
    <article className="flex flex-col text-base tracking-normal leading-6 rounded-card-radius max-w-[360px] overflow-hidden">
      <img
        loading="lazy"
        src={src}
        alt={alt}
        className="w-full aspect-[1.49]"
      />
      <div className="flex flex-col px-6 py-8 w-full bg-primary-50">
        <div className="text-s">{eyebrow}</div>
        <h3 className="text-3xl font-semibold tracking-normal text-primary-500">
          {headline}
        </h3>
        <p className="mt-4 leading-6 text-ellipsis">{description}</p>
        <button
          type="button"
          className="justify-center items-center px-16 py-3 mt-8 font-semibold text-neutral-0 whitespace-nowrap bg-primary-500 rounded-[160px]"
        >
          {action}
        </button>
      </div>
    </article>
  );
}
