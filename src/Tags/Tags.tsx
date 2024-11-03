export const Tags = ({ items }) => {
  return (
    <div className="my-10 ">
      <ul className="flex flex-wrap justify-end">
        {items.map((item) => (
          <li className="my-4" key={item.label}>
            <a className="p-3" href={item.href}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
