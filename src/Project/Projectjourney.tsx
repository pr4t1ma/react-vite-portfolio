const Projectjourney = () => {
  return (
    <div className="container mx-3 p-5 my-3 ">
      <div className=" flex gap-10 container">
        <div className=" ">
          <h1 className="my-3">My UI/UX journey</h1>
          <ul className="flex flex-col gap-2">
            <li>
              Brand identity / I start to choose correct fonts and colours.
            </li>
            <li>Information architecture / Sitemap</li>
            <li>Website layout / wire-framing</li>
            <li>Working in component and auto-layout</li>
            <li>Gathering feedback / Iteration</li>
            <li>Prototype</li>
            <li>User testing / user interview.</li>
            <li>Gathering information and Iteration on design.</li>
            <li>Final website design.</li>
          </ul>
        </div>
        <div className="">
          <div className="colors flex flex-row">
            <div className="color-white w-52 h-20 bg-white "></div>
            <div className="color-black w-32 h-20 bg-black"></div>
            <div className="color-yellow w-12 h-20 bg-yellow-500"></div>
          </div>
          <h2>Brand Colors</h2>
          <h3>Typography</h3>
        </div>
      </div>
    </div>
  );
};
export default Projectjourney;
