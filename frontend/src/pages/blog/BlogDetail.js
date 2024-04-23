import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axiosInstance from "../../axios_instance";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  useEffect(() => {
    axiosInstance
      .get(`api/blogs/${id}/`)
      .then((res) => {
        console.log(res.data);
        setBlog(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (!blog) return <></>;

  return (
    <div className="card container mt-5 shadow">
      <div className="card-body">
        <h5 className="card-title">{blog.title}</h5>
        <p className="card-text">
          <small className="text-muted">
            By {blog.author} on{" "}
            {Date(blog.date).toLocaleString("en-US", options)}
          </small>
        </p>
        <p className="card-text">{blog.content}</p>
        <div>
          <Link to={`/blogs/${id}/update`} className="btn btn-primary me-2">
            Update
          </Link>
          <Link to={`/blogs/${id}/delete`} className="btn btn-danger">
            Delete
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
