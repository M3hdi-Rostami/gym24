const SocialLink = ({ children, link }) => {
  return (
    <span className="w-10 h-10 rounded-full border border-white text-white flex items-center justify-center hover:text-yellow hover:border-yellow transition duration-500 cursor-pointer">
      <a href={link} target="_blank" rel="noreferrer">
        {children}
      </a>
    </span>
  );
};

export default SocialLink;
