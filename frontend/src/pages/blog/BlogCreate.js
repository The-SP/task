import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../axios_instance";

const BlogCreate = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axiosInstance
      .post("api/blogs/create/", { title, content })
      .then((res) => {
        console.log("Blog posted:", res.data.title);
        navigate("/blogs");
      })
      .catch((err) => console.log("Form submit error:", err));
  };

  return (
    <div className="container p-5">
      <h2 className="page-title text-center">Create new blog</h2>
      <form onSubmit={handleSubmit} className="shadow p-3 p-md-4">
        <div className="form-group mb-3">
          <label className="form-label fw-bold" htmlFor="title">
            Title:
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
            required
          />
        </div>
        <div className="form-group mb-3">
          <label className="form-label fw-bold" htmlFor="content">
            Content:
          </label>
          <textarea
            type="text"
            className="form-control"
            placeholder="Write blog here..."
            id="content"
            style={{height: "300px"}}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-lg btn-success">
          Post Blog
        </button>
      </form>
    </div>
  );
};

export default BlogCreate;
