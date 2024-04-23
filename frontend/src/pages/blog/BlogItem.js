import { Link } from "react-router-dom";

const BlogItem = ({ blog }) => {
  const truncatedContent = blog.content.slice(0, 100) + "...";
  const formattedDate = new Date(blog.date).toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return (
    <div className="card mb-4 blog-item">
      <div className="card-body">
        <h5 className="card-title fs-2">{blog.title}</h5>
        <p className="card-text lead">
          By <span className="fw-normal">{blog.author_name}</span> on{" "}
          {formattedDate}
        </p>
        <p className="card-text fs-5 mt-4">{truncatedContent}</p>
        <Link to={`/blogs/${blog.id}`} className="btn btn-primary">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;
