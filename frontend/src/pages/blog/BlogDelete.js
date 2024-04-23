import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../axios_instance";

const BlogDelete = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState(null);

  const handleDelete = () => {
    setIsDeleting(true);
    axiosInstance
      .delete(`api/blogs/${id}/delete/`)
      .then(() => {
        setIsDeleting(false);
        navigate("/blogs");
      })
      .catch((err) => {
        setError(err);
        setIsDeleting(false);
      });
  };

  return (
    <div className="container my-5">
      <div className="card">
        <div className="card-header">Delete Blog</div>
        <div className="card-body">
          {error && <p className="text-danger">{error.message}</p>}
          <p>Are you sure you want to delete this blog?</p>
          <button
            className="btn btn-danger"
            disabled={isDeleting}
            onClick={handleDelete}
          >
            {isDeleting ? "Deleting..." : "Delete"}
          </button>{" "}
          <button className="btn btn-secondary" onClick={() => navigate(-1)}>
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogDelete;
