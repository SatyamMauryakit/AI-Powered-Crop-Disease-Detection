import { useEffect, useState } from "react";
import axios from "axios";

function Forum() {
  const [posts, setPosts] = useState([]); // Ensure default state is an array
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [comment, setComment] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch posts from API
  useEffect(() => {
    axios
      .get("/api/forum")
      .then((res) => {
        if (Array.isArray(res.data)) {
          setPosts(res.data);
        } else {
          console.error("Unexpected API response:", res.data);
          setPosts([]);
        }
      })
      .catch((err) => {
        console.error("Error fetching posts:", err);
        setError("Failed to load posts. Please try again.");
      })
      .finally(() => setLoading(false));
  }, []);

  // Handle post submission
  const handlePostSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("user", "John Doe"); // Mock user
    if (file) formData.append("image", file);

    try {
      const res = await axios.post("/api/forum", formData);
      setPosts([res.data, ...posts]);
      setTitle("");
      setDescription("");
      setFile(null);
    } catch (err) {
      console.error("Error submitting post:", err);
      setError("Failed to submit post.");
    }
  };

  // Handle comment submission
  const handleCommentSubmit = async (postId) => {
    try {
      const res = await axios.post(`/api/forum/${postId}/comment`, {
        user: "Jane Smith", // Mock user
        text: comment[postId],
      });

      setPosts(posts.map((p) => (p._id === postId ? res.data : p)));
      setComment({ ...comment, [postId]: "" }); // Clear comment input
    } catch (err) {
      console.error("Error submitting comment:", err);
      setError("Failed to submit comment.");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Farmer Community Forum
      </h2>

      {loading && <p className="text-center text-gray-500">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="flex flex-col md:flex-row">
        {/* Create Post Section */}
        <div className="w-full md:w-1/4 p-4">
          <div className="bg-white p-4 rounded shadow mb-6">
            <h3 className="text-xl font-bold mb-2">Create a Post</h3>
            <form onSubmit={handlePostSubmit}>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                className="w-full p-2 border border-gray-300 rounded mb-4"
              />
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
                className="w-full p-2 border border-gray-300 rounded mb-4"
              />
              <input
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
                className="mb-4"
              />
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full"
              >
                Post
              </button>
            </form>
          </div>
        </div>

        {/* Posts Section */}
        <div className="w-full md:w-3/4 p-4">
          {Array.isArray(posts) && posts.length > 0
            ? posts.map((post) => (
                <div
                  key={post._id}
                  className="bg-white p-4 rounded shadow mb-6"
                >
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="mb-4">{post.description}</p>
                  {post.imageUrl && (
                    <img
                      src={post.imageUrl}
                      alt="Post"
                      className="w-full h-auto mb-4"
                    />
                  )}

                  {/* Comments Section */}
                  <div className="bg-gray-100 p-4 rounded">
                    <h4 className="font-bold mb-2">Comments</h4>
                    {Array.isArray(post.comments) &&
                    post.comments.length > 0 ? (
                      post.comments.map((c, i) => (
                        <p key={i}>
                          <strong>{c.user}:</strong> {c.text}
                        </p>
                      ))
                    ) : (
                      <p className="text-gray-500">No comments yet.</p>
                    )}

                    {/* Add Comment Section */}
                    <textarea
                      value={comment[post._id] || ""}
                      onChange={(e) =>
                        setComment({ ...comment, [post._id]: e.target.value })
                      }
                      placeholder="Add a comment..."
                      className="w-full p-2 border border-gray-300 rounded mb-4"
                    />
                    <button
                      onClick={() => handleCommentSubmit(post._id)}
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full"
                    >
                      Comment
                    </button>
                  </div>
                </div>
              ))
            : !loading && (
                <p className="text-center text-gray-500">No posts available.</p>
              )}
        </div>
      </div>
    </div>
  );
}

export default Forum;
