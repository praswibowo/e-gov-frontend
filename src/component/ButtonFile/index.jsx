export const ButtonFile = ({ href, title }) => {
  return (
    <a
      href={href}
      download
      className="px-7 py-4 bg-primary rounded-lg text-white font-bold"
    >
      {title}
    </a>
  );
};
