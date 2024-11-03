export const FooterMenu = ({ items }) => {
  return (
    <div>
      <ul className=" flex flex-col md:flex md:flex-row md:justify-center my-10">
        {items.map((item) => (
          <li key={item.label}>
            <a className="p-10" href={item.href}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
