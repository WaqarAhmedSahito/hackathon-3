interface ButtonProps {
  text: string;
  classNames: string;
  imgSrc?: string;
  onClick?: () => void;
}
export default function Button({ text, classNames, imgSrc, onClick }: ButtonProps) {
  return (
    <div
      className={`bg-black mb-4 px-4 text-white text-center cursor-pointer hover:bg-transparent border-2 border-black hover:text-black transition-all duration-300 ease-in-out ${classNames}`}
      onClick={onClick}>
      {imgSrc ? (
        <img
          src={imgSrc}
          alt={text}
          className="object-cover w-6 h-6 rounded-full"/>
      ) : (
        <span>{text}</span>
      )}
    </div>
  );
}