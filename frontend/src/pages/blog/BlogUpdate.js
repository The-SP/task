import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../axios_instance";

const BlogUpdate = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    axiosInstance
      .get(`api/blogs/${id}/`)
      .then((res) => {
        setTitle(res.data.title);
        setContent(res.data.content);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosInstance
      .put(`api/blogs/${id}/update/`, { title, content })
      .then((res) => {
        console.log("Blog updated:", res.data.title);
        navigate(`/blogs/${id}`);
      })
      .catch((err) => console.log("Form update error:", err));
  };

  return (
    <div className="container p-5">
      <h2 className="page-title text-center">Update Blog</h2>
      <form onSubmit={handleSubmit} className="shadow p-3 p-md-4">
        <div className="form-group mb-3">
          <label className="form-label" htmlFor="title">
            Title:
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label className="form-label" htmlFor="content">
            Content:
          </label>
          <textarea
            type="text"
            className="form-control"
            placeholder="Write blog here..."
            id="content"
            style={{ height: "300px" }}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-lg btn-primary">
          Update Blog
        </button>
      </form>
    </div>
  );
};

export default BlogUpdate;
