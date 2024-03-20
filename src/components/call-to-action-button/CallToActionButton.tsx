
interface CallToActionButtonProps {
  text: string;
  iconSrc: string;
}

const CallToActionButton: React.FC<CallToActionButtonProps> = ({ text, iconSrc }) => {
  return (
    <button className="flex flex-col justify-center self-stretch p-3 text-base bg-white border border-solid border-neutral-200 text-neutral-500">
      <div className="flex gap-2">
        <img loading="lazy" src={iconSrc} alt="" className="shrink-0 w-6 aspect-square" />
        <div className="flex-auto">{text}</div>
      </div>
    </button>
  );
};

export default CallToActionButton;
