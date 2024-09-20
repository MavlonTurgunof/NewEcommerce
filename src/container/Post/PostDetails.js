import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const PostDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const fetchPostDetail = async () => {
        try {
          const response = await axios.get(`https://dummyjson.com/posts/${id}`);
          setPost(response.data);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching post details:", error);
          setLoading(false);
        }
      };

      fetchPostDetail();
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="bg-white text-black container mx-auto p-4 h-auto">
      <div className="max-w-7xl mx-auto ">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>

        <p className="text-gray-700 mb-6">{post.body}</p>

        <div className="flex items-center space-x-4 mb-4">
          <span className="text-gray-500">Views: {post.views}</span>
          <span className="text-green-600">Likes: {post.reactions.likes}</span>
          <span className="text-red-600">
            Dislikes: {post.reactions.dislikes}
          </span>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-blue-200 text-blue-800 px-2 py-1 text-xs rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="text-gray-500">
          Posted by User ID: <span className="font-bold">{post.userId}</span>
        </p>
      </div>
    </div>
  );
};

export default PostDetails;
