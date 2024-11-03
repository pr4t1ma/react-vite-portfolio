import { blogListData } from "./BlogList";

export const Blogs = () => {
  return (
    <div className="container">
      <h1>Hello</h1>
      {blogListData.map((blog) => (
        <div className="border m-1">
          <h2>{blog.titile}</h2>
          <p>{blog.body}</p>
          <strong>{blog.author}</strong>
        </div>
      ))}
    </div>
  );
};
