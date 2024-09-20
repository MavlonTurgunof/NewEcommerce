// pages/AddUser.jsx
import { useState } from "react";
import axios from "axios";

const AddUser = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    email: "",
    phone: "",
    username: "",
    password: "",
    birthDate: "",
    address: {
      address: "",
      city: "",
      state: "",
      stateCode: "",
      postalCode: "",
      country: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("address.")) {
      const addressKey = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        address: { ...prev.address, [addressKey]: value },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://dummyjson.com/users/add", formData);
      alert("User added successfully");
      setFormData({
        firstName: "",
        lastName: "",
        age: "",
        gender: "",
        email: "",
        phone: "",
        username: "",
        password: "",
        birthDate: "",
        address: {
          address: "",
          city: "",
          state: "",
          stateCode: "",
          postalCode: "",
          country: "",
        },
      });
    } catch (error) {
      console.error("Error adding user:", error);
      alert("Failed to add user");
    }
  };

  return (
    <div className="bg-white text-black container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Add New User</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="border w-full p-2"
            required
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="border w-full p-2"
            required
          />
        </div>
        <div>
          <label>Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="border w-full p-2"
            required
          />
        </div>
        <div>
          <label>Gender</label>
          <input
            type="text"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="border w-full p-2"
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border w-full p-2"
            required
          />
        </div>
        <div>
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="border w-full p-2"
            required
          />
        </div>
        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="border w-full p-2"
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="border w-full p-2"
            required
          />
        </div>
        <div>
          <label>Birth Date</label>
          <input
            type="date"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
            className="border w-full p-2"
            required
          />
        </div>

        {/* Address Fields */}
        <div>
          <h3 className="font-bold">Address</h3>
          <label>Street</label>
          <input
            type="text"
            name="address.address"
            value={formData.address.address}
            onChange={handleChange}
            className="border w-full p-2"
            required
          />
          <label>City</label>
          <input
            type="text"
            name="address.city"
            value={formData.address.city}
            onChange={handleChange}
            className="border w-full p-2"
            required
          />
          <label>State</label>
          <input
            type="text"
            name="address.state"
            value={formData.address.state}
            onChange={handleChange}
            className="border w-full p-2"
            required
          />
          <label>Country</label>
          <input
            type="text"
            name="address.country"
            value={formData.address.country}
            onChange={handleChange}
            className="border w-full p-2"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddUser;
