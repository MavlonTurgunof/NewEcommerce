import { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "./UserCard";
import { useRouter } from "next/router";

const UsersList = () => {
  const router = useRouter();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalUsers, setTotalUsers] = useState(0);
  const limit = 15;

  const fetchUsers = async (currentPage) => {
    const skip = (currentPage - 1) * limit;
    setLoading(true);
    try {
      const response = await axios.get(
        `https://dummyjson.com/users?limit=${limit}&skip=${skip}&select=id,firstName,lastName,email,phone,birthDate,address`
      );
      setUsers(response.data.users);
      setTotalUsers(response.data.total);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching users:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers(page);
  }, [page]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white container mx-auto p-6 text-black">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Users List</h1>
        <button
          className="bg-blue-600 text-white px-6 py-3 rounded-xl"
          onClick={() => router.push("/AddNewUser")}
        >
          Add new user
        </button>
      </div>

      <table className="table-auto w-full border-collapse border">
        <thead>
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">First Name</th>
            <th className="border px-4 py-2">Last Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Phone</th>
            <th className="border px-4 py-2">Birth Date</th>
            <th className="border px-4 py-2">Country</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => <UserCard key={user.id} user={user} />)
          ) : (
            <tr>
              <td colSpan="8" className="text-center py-4">
                No users found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
          onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 1))}
          disabled={page === 1}
        >
          Previous
        </button>
        <span className="px-4 py-2">Page {page}</span>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={() => setPage((prevPage) => prevPage + 1)}
          disabled={page * limit >= totalUsers}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default UsersList;
