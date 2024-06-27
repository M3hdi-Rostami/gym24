const Button = ({ title, extraClass }) => {
  return (
    <button
      className={`bg-yellow py-4 rounded-[30px] text-16 font-medium text-black flex items-center justify-center min-w-[107px] max-w-[177px] hover:opacity-[0.8] transition ${extraClass}`}
    >
      {title}
    </button>
  );
};

export default Button;
