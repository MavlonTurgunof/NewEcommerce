// pages/users/[id].js
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";

const UserDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchUserDetail = async () => {
        try {
          const response = await axios.get(`https://dummyjson.com/users/${id}`);
          setUser(response.data);
          setLoading(false);
        } catch (error) {
          setError("Failed to load user data");
          setLoading(false);
        }
      };

      fetchUserDetail();
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!user) {
    return <div>No user found</div>;
  }

  return (
    <div className="bg-white text-black container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">
        User Detail: {user.firstName} {user.lastName}
      </h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <img
          src={user.image}
          alt={`${user.firstName} ${user.lastName}`}
          className="mb-4 w-32 h-32 rounded-full object-cover"
        />
        <p>
          <strong>Full Name:</strong> {user.firstName} {user.lastName}
        </p>
        <p>
          <strong>Username:</strong> {user.username}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Phone:</strong> {user.phone}
        </p>
        <p>
          <strong>Age:</strong> {user.age}
        </p>
        <p>
          <strong>Gender:</strong> {user.gender}
        </p>
        <p>
          <strong>Birth Date:</strong> {user.birthDate}
        </p>
        <p>
          <strong>Address:</strong> {user.address.address}, {user.address.city},{" "}
          {user.address.state}, {user.address.country},{" "}
          {user.address.postalCode}
        </p>

        <Link href={`/Users/update/${user.id}`}>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md">
            Update User
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UserDetail;
