interface LoginButtonProps {
  iconSrc: string;
}

const LoginButton: React.FC<LoginButtonProps> = ({ iconSrc }) => {
  return (
    <div className="flex gap-1 justify-center self-stretch py-0.5 my-auto whitespace-nowrap">
      <img loading="lazy" src={iconSrc} alt="" className="shrink-0 self-start w-5 aspect-square" />
      <div>Login</div>
    </div>
  );
};

export default LoginButton;
