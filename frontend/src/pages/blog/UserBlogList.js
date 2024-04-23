import { useState, useEffect } from "react";
import axiosInstance from "../../axios_instance";
import Spinner from "../../components/Spinner";
import BlogItem from "./BlogItem";

const UserBlogList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    axiosInstance
      .get("api/blogs/user/")
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
      <h2 className="text-center mb-5 page-title ">Your Blogs</h2>
      {blogs.map((blog, index) => (
        <BlogItem key={index} blog={blog} />
      ))}
    </div>
  );
};

export default UserBlogList;
