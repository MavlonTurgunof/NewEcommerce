// components/LoginModal.jsx
import { useState } from "react";
import axios from "axios";

const LoginModal = ({ onClose, setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post("/api/login", {
        username,
        password,
        expiresInMins: 30, // optional
      });

      const { token, refreshToken, userId, ...userData } = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("refreshToken", refreshToken);
      localStorage.setItem("userId", userId);
      setUser(userData);

      onClose();
    } catch (error) {
      console.error("Login Error:", error);
      setError("Invalid username or password");
    }
  };

  return (
    <div className="z-10 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 text-black">
      <div className="bg-white rounded-lg shadow-lg w-96 p-6">
        <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Login
            </button>
            <button
              type="button"
              className="text-gray-500 hover:text-gray-700"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
