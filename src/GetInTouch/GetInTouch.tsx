export const GetInTouch = ({ title, subtitle, text }) => {
  return (
    <div className="get-intouch container mx-2 w-fit bg-white shadow-2xl p-7 text-center mb-20  md:mx-auto lg:max-w-4xl lg:mx-auto">
      <h1 className="text-tan my-5 "> {title} </h1>
      <h2 className="my-2">{subtitle}</h2>
      <p>{text}</p>
    </div>
  );
};
