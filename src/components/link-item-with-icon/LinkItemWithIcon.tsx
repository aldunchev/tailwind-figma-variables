interface LinkItemWithIconProps {
  text: string;
  iconSrc: string;
}

const LinkItemWithIcon: React.FC<LinkItemWithIconProps> = ({ text, iconSrc }) => {
  return (
    <div className="flex gap-1 justify-center self-stretch py-0.5">
      <div className="grow">{text}</div>
      <img loading="lazy" src={iconSrc} alt="" className="shrink-0 self-start w-5 aspect-square" />
    </div>
  );
};

export default LinkItemWithIcon;
