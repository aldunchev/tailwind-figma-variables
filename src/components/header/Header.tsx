import * as React from "react";
import LinkItem from '@/components/link-item/LinkItem';
import LinkItemWithIcon from '@/components/link-item-with-icon/LinkItemWithIcon';
import LanguageSwitcher from '@/components/language-switcher/LanguageSwitcher';
import LoginButton from '@/components/login-button/LoginButton';
import CallToActionButton from '@/components/call-to-action-button/CallToActionButton';

const Header: React.FC = () => {
  const linkItems = [
    { text: "Link Item" },
    { text: "Link Item" },
    { text: "Link Item" },
    { text: "Link Item" },
    { text: "Link Item", iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/df2386bea816e08bb0bce7c868648c760cb9cbcc3338845413802497a959372c?apiKey=6930010e2b8842c4b058a931ee8137c8&" },
  ];

  return (
    <header className="flex justify-center items-center px-16 bg-white leading-[150%] max-md:px-5">
      <div className="flex gap-5 justify-between w-full max-w-[1128px] max-md:flex-wrap max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-wrap max-md:max-w-full">
          <div className="flex flex-col justify-center my-auto text-xs tracking-normal text-secondary-900 bg-neutral-0">
            <div className="justify-center px-9 py-4 border border-dashed bg-slate-100 border-slate-400 max-md:px-5">
              Brand Logo
            </div>
          </div>
          <nav className="flex flex-auto gap-5 items-center py-6 text-sm tracking-normal text-zinc-800 max-md:flex-wrap">
            {linkItems.map((item, index) => (
              <React.Fragment key={index}>
                {item.iconSrc ? (
                  <LinkItemWithIcon text={item.text} iconSrc={item.iconSrc} />
                ) : (
                  <LinkItem text={item.text} />
                )}
              </React.Fragment>
            ))}
          </nav>
        </div>
        <div className="flex gap-5 justify-between items-center my-auto text-sm tracking-normal text-zinc-800">
          <LanguageSwitcher languageCode="EN" iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/dfa2a0d4e6f5b98b71a4db82578c6cb32509463a4f3819350ddf3d57eaadbfba?apiKey=6930010e2b8842c4b058a931ee8137c8&" />
          <LoginButton iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/19b2e0d362dbb3d6d531947181719c3eb89e6025208778a8bc2a9c1659ba4988?apiKey=6930010e2b8842c4b058a931ee8137c8&" />
          <CallToActionButton text="Call to Action" iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/79bc38db1a7b87fc5d603b4cbd9ad3c06643dcf9e69406955f160ae92ca457a7?apiKey=6930010e2b8842c4b058a931ee8137c8&" />
        </div>
      </div>
    </header>
  );
};

export default Header;
