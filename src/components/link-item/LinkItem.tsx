interface LinkItemProps {
  text: string;
}

const LinkItem: React.FC<LinkItemProps> = ({ text }) => {
  return <div className="self-stretch my-auto">{text}</div>;
};

export default LinkItem;
