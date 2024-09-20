import { FaThumbsUp, FaThumbsDown, FaEye } from "react-icons/fa";
import Link from "next/link"; // Import Link for navigation

const PostCard = ({ post }) => {
  return (
    <Link className="bg-white" href={`/PostDetails/${post.id}`}>
      <div className="bg-white border rounded-lg p-4 shadow-md">
        <h2 className="font-bold text-xl mb-2">{post.title}</h2>
        <p className="text-gray-700 text-sm mb-4">
          {post.body && post.body.length > 100
            ? post.body.slice(0, 100) + "..."
            : post.body || "No content available"}
        </p>
        <div className="flex flex-wrap gap-2 mb-2">
          {post.tags && Array.isArray(post.tags) && post.tags.length > 0 ? (
            post.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-blue-200 text-blue-800 px-2 py-1 text-xs rounded-md"
              >
                {tag}
              </span>
            ))
          ) : (
            <span>No tags available</span>
          )}
        </div>
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <span className="flex items-center space-x-1 text-gray-600">
              <FaThumbsUp /> <span>{post.reactions.likes}</span>
            </span>
            <span className="flex items-center space-x-1 text-gray-600">
              <FaThumbsDown /> <span>{post.reactions.dislikes}</span>
            </span>
            <span className="flex items-center space-x-1 text-gray-600">
              <FaEye /> <span>{post.views}</span>
            </span>
          </div>
          <Link
            className="text-blue-600 hover:underline"
            href={`/PostDetails/${post.id}`}
          >
            Read More
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
