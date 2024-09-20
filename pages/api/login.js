// pages/api/login.js
import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const response = await axios.post(
        "https://dummyjson.com/auth/login",
        req.body,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Forward the response from the dummyjson API back to the client
      res.status(200).json(response.data);
    } catch (error) {
      console.error("Error logging in:", error);
      res.status(500).json({ message: "Login failed" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
