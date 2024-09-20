import { useState } from "react";
import axios from "axios";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAddPost = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const userId = localStorage.getItem("userId");

    const postData = {
      title: title,
      body: body,
      tags: tags.split(",").map((tag) => tag.trim()),
      userId: userId,
    };

    try {
      const response = await axios.post(
        "https://dummyjson.com/posts/add",
        postData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Post added:", response.data);
      alert("Post added successfully!");

      setTitle("");
      setBody("");
      setTags("");
    } catch (error) {
      console.error("Error adding post:", error);
      alert("Failed to add post. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto p-4 bg-white text-black">
      <h1 className="text-3xl font-bold mb-4">New Post</h1>

      <form onSubmit={handleAddPost} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Post Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            placeholder="Enter post title"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Body
          </label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            rows="5"
            placeholder="Enter post body"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Tags
          </label>
          <input
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            placeholder="Enter comma-separated tags"
            required
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className={`px-4 py-2 font-semibold text-white bg-blue-600 rounded-md ${
              isSubmitting
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-blue-700"
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Adding..." : "Add new post"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPost;
