import Projectjourney from "../Project/Projectjourney";

const ProjectInfo = () => {
  return (
    <div className="container mx-3 p-5 my-3 ">
      <h1 className=" my-10">Bundesplatz kino Website design</h1>
      <img
        className="h-1/2 w-fit"
        src="https://wallpapers.com/images/hd/purple-wakanda-forever-poster-a5wvp987w8ncm6yf.jpg"
        alt=""
      />
      <div className="roles my-10">
        <ul>
          <li>
            Roles: <span>UI/Ux design</span>
          </li>
          <li>
            Project Period: <span>3 Months</span>
          </li>
          <li>
            Project: <span>Coursera Project</span>
          </li>
          <li>
            Tool: <span>Pen Paper/ figma/Figjam</span>
          </li>
        </ul>
      </div>
      <Projectjourney />
      <div className="planning">
        <img src="" alt="" />
      </div>
      <div className="wireframe">
        <img src="" alt="" />
      </div>
      <div className="design-before  grid grid-cols-2 gap-10 my-20">
        <img className="max-w-full" src="images/bundesplatz.png" alt="" />
        <div className="">
          <h2 className="my-2">Problems in this website</h2>
          <p>
            This site does not follow the information architecture , the site
            has cognitive overload with lots of information for the users. And
            also the site does not utilise the free space rather compresses the
            text in limited width, which does not look nice and makes it look
            imbalanced. This site is for the movies but they don't have banner
            images or movie trailer s in Homepage, which could be improved.
          </p>
        </div>
      </div>
      <div className="design-after grid grid-cols-2 gap-10">
        <div>
          <h2 className="my-2">Information architecture</h2>
          <p>
            Designing clear information architecture makes this site more clear
            and easy for the user to access movies. The selecting date and time
            or showing current movies in banners makes it easier for the user to
            book or reserve tickets.
          </p>
        </div>
        <img src="images/designafter.png" alt="" />
      </div>
      <div className="grid grid-cols-2 my-10">
        <div>
          <h2 className="my-5">User Interview</h2>
          <p>
            architecture makes this site more clear and easy for the user to
            access movies. The selecting date and time or showing current movies
            in banners makes it easier for the user to book or reserve tickets.
          </p>
        </div>
        <div></div>
      </div>
      <div>
        <h2>User testing feedback</h2>
        <div className="grid grid-cols-2">
          <div>
            <h3>Possitive feedback</h3>
            <ul>
              <li>Everything is clear and concise on one page</li>
              <li>The color combination is very simple and user-friendly.</li>
              <li>Booking system work very fast</li>
              <li>Easy to find out information</li>
              <li>Easy to navigate through pages.</li>
              <li>Very clean and simple</li>
            </ul>
          </div>
          <div>
            <h3>Need to be Improved</h3>
            <ul>
              <li>Same information repeating twice </li>
              <li> Size of the menu Could be bigger.</li>
              <li>Left sidebar also could be bigger.</li>
              <li>Now Showing section did not work very well.</li>
              <li>The Logo is not his type.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="prototype my-10">
        <h2 className=" mb-5">Prototype</h2>
        <img src="images/prototype.png" alt="" />
      </div>
      <div className="finaldesign my-10">
        <h2 className="my-5">Final design</h2>
        <img src="images/finaldesign.png" alt="" />
      </div>
    </div>
  );
};
export default ProjectInfo;
