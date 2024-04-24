import { useState, useEffect } from "react";
import axiosInstance from "../../axios_instance";
import Spinner from "../../components/Spinner";
import BlogItem from "./BlogItem";
import Pagination from "./Pagination";

const BlogList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const BLOGS_PER_PAGE = 5;

  useEffect(() => {
    setIsLoading(true);
    axiosInstance
      .get("api/blogs/")
      .then((res) => {
        // console.log(`Fetched ${res.data.length} blogs`);
        setBlogs(res.data);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  // Get current posts
  const indexofLastBlog = currentPage * BLOGS_PER_PAGE;
  const indexofFirstBlog = indexofLastBlog - BLOGS_PER_PAGE;
  const currentBlogs = blogs
    ? blogs.slice(indexofFirstBlog, indexofLastBlog)
    : [];

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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
      <h2 className="text-center mb-5 page-title">Blogs</h2>
      {currentBlogs.map((blog, index) => (
        <BlogItem key={index} blog={blog} />
      ))}
      <Pagination
        blogsPerPage={BLOGS_PER_PAGE}
        totalBlogs={blogs.length}
        paginate={paginate}
      />
    </div>
  );
};

export default BlogList;
