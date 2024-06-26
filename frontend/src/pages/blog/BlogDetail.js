import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axiosInstance from "../../axios_instance";
import AuthContext from "../../context/AuthContext";

const BlogDetail = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
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
        // console.log(res.data);
        setBlog(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (!blog) return <></>;

  return (
    <div className="card container mt-5 shadow">
      <div className="card-body">
        <h5 className="card-title fs-1">{blog.title}</h5>
        <p className="card-text lead">
          By <span className="fw-normal">{blog.author_name}</span> on{" "}
          {new Date(blog.date).toLocaleString("en-US", options)}
        </p>
        <p className="card-text fs-5 mt-4">{blog.content}</p>
        {user && user.id === blog.author && (
          <div>
            <Link to={`/blogs/${id}/update`} className="btn btn-primary me-2">
              Update
            </Link>
            <Link to={`/blogs/${id}/delete`} className="btn btn-danger">
              Delete
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogDetail;
