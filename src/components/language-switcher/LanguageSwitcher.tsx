interface LanguageSwitcherProps {
  languageCode: string;
  iconSrc: string;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ languageCode, iconSrc }) => {
  return (
    <div className="flex gap-1 justify-center self-stretch py-0.5 my-auto whitespace-nowrap">
      <img loading="lazy" src={iconSrc} alt="" className="shrink-0 self-start w-5 aspect-square" />
      <div>{languageCode}</div>
    </div>
  );
};

export default LanguageSwitcher;
