import { useState, useEffect } from "react";
import axiosInstance from "../../axios_instance";
import Spinner from "../../components/Spinner";
import BlogItem from "./BlogItem";

const BlogList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    axiosInstance
      .get("api/blogs/")
      .then((res) => {
        console.log(`Fetched ${res.data.length} blogs`);
        setBlogs(res.data);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <Spinner />;

  if (blogs.length === 0) {
    return (
      <div className="container-fluid py-5 px-5">
        <h2 className="text-center fs-1">No blogs!</h2>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="text-center mb-5 page-title fs-1">Blogs</div>
      {blogs.map((blog, index) => (
        <BlogItem key={index} blog={blog} />
      ))}
    </div>
  );
};

export default BlogList;
