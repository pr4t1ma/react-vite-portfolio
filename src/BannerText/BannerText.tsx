import { Banner } from "../Banner";

export const BannerText = () => {
  return (
    <div className=" container shadow-xl shadow-gray w-fit mx-auto lg:mx-auto lg:grid grid-cols-2 gap-4 bg-forestgreen p-4 ">
      <div className=" md:shrink-0 ">
        <Banner />
      </div>

      <div className="  text-white flex justify-center items-center text-2xl py-8 lg:text-4xl">
        <p className="leading-loose text-md font-book">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex amet modi
          iste accusamus, nihil aut dicta dignissimos. Eveniet, nesciunt. Ut,
          quod! Consequatur saepe iusto labore voluptatibus commodi. Inventore,
          consequuntur impedit?
        </p>
      </div>
    </div>
  );
};
