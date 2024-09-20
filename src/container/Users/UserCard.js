import Link from "next/link";

const UserCard = ({ user }) => {
  const formattedDate = new Date(user.birthDate).toLocaleDateString();

  return (
    <tr>
      <td className="border px-4 py-2">{user.id}</td>
      <td className="border px-4 py-2">{user.firstName}</td>
      <td className="border px-4 py-2">{user.lastName}</td>
      <td className="border px-4 py-2">{user.email}</td>
      <td className="border px-4 py-2">{user.phone}</td>
      <td className="border px-4 py-2">{formattedDate}</td>
      <td className="border px-4 py-2">{user.address.country}</td>
      <td className="py-2">
        <Link
          href={`/Users/${user.id}`}
          className="text-blue-500 hover:underline"
        >
          View Details
        </Link>
      </td>
    </tr>
  );
};

export default UserCard;
