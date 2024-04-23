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
    <div className="card mb-3 shadow">
      <div className="card-body">
        <h5 className="card-title">{blog.title}</h5>
        <p className="card-text">
          <small className="text-muted">
            By {blog.author} on {formattedDate}
          </small>
        </p>
        <p className="card-text">{truncatedContent}</p>
        <Link to={`/blogs/${blog.id}`} className="btn btn-primary">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;
