import axios from "axios";
import { useState, useEffect } from "react";
import PostCard from "./PostCard";
import { useRouter } from "next/router";

const PopularPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("title");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPosts, setTotalPosts] = useState(0);
  const postsPerPage = 12;
  const [searchQuery, setSearchQuery] = useState("");
  const [noMatch, setNoMatch] = useState(false);
  const router = useRouter();

  // Fetch posts from API
  const fetchPosts = async (page, search = "") => {
    setLoading(true);
    setNoMatch(false);
    try {
      const skip = (page - 1) * postsPerPage;
      let url = `https://dummyjson.com/posts?limit=${postsPerPage}&skip=${skip}&select=title,body,tags,reactions,userId,id`;

      if (search) {
        url = `https://dummyjson.com/posts/search?q=${search}&limit=${postsPerPage}&skip=${skip}`;
      }

      const response = await axios.get(url);
      const fetchedPosts = response.data.posts;

      if (fetchedPosts.length === 0) {
        setNoMatch(true);
      }

      setPosts(fetchedPosts);
      setTotalPosts(response.data.total);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  // Handle sorting posts
  const handleSort = (postsArray, criteria) => {
    if (criteria === "title") {
      return postsArray.sort((a, b) => a.title.localeCompare(b.title));
    } else if (criteria === "reactions") {
      return postsArray.sort((a, b) => b.reactions - a.reactions);
    } else if (criteria === "date") {
      return postsArray.sort((a, b) => new Date(b.date) - new Date(a.date));
    }
  };

  // Pagination handling
  const handleNextPage = () => {
    if (currentPage < Math.ceil(totalPosts / postsPerPage)) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query === "") {
      fetchPosts(1, "");
      setCurrentPage(1);
    }
  };

  // Handle search submit
  const handleSearchSubmit = () => {
    setCurrentPage(1);
    fetchPosts(1, searchQuery);
  };

  // Fetch posts on page change or search
  useEffect(() => {
    fetchPosts(currentPage, searchQuery);
  }, [currentPage]);

  useEffect(() => {
    if (posts.length) {
      handleSort(posts, sortBy);
    }
  }, [sortBy, posts]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="text-black bg-white container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold">Popular Posts</h1>

      {/* Search and Sort */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <input
            type="text"
            placeholder="Search posts..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="border rounded-md px-2 py-1"
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md ml-2"
            onClick={handleSearchSubmit}
          >
            Search
          </button>
        </div>

        <div>
          <label className="mr-2">Sort by:</label>
          <select
            className="border rounded-md px-2 py-1"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="title">Title</option>
            <option value="reactions">Most Liked</option>
            <option value="date">Date</option>
          </select>
        </div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={() => router.push("/AddPostPage")}
        >
          Add New Post
        </button>
      </div>
      {noMatch ? (
        <div className="text-red-500 text-lg font-bold">
          No posts matched your search.
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
          <div className="flex justify-between items-center mt-6">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className={`px-4 py-2 bg-gray-300 text-black rounded-md ${
                currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Previous
            </button>

            <span className="text-lg">
              Page {currentPage} of {Math.ceil(totalPosts / postsPerPage)}
            </span>

            <button
              onClick={handleNextPage}
              disabled={currentPage === Math.ceil(totalPosts / postsPerPage)}
              className={`px-4 py-2 bg-gray-300 text-black rounded-md ${
                currentPage === Math.ceil(totalPosts / postsPerPage)
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default PopularPosts;
