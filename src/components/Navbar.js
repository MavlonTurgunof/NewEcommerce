// components/Navbar.jsx
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaSearch, FaUser } from "react-icons/fa";
import LoginModal from "@/container/LoginPopup/LoginPopup";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [user, setUser] = useState(null); // Stores the logged-in user

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleLoginModal = () => {
    setIsLoginModalOpen(!isLoginModalOpen);
  };
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");
    setIsDropdownOpen(false);
  };
  const saveUserData = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <nav className="bg-white shadow-md container mx-auto">
      <div className="container max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-xl font-bold">
          <Link href="/">E-Commerce</Link>
        </div>
        <div className="space-x-8">
          <Link className="text-gray-700 hover:text-gray-900" href="/">
            Home
          </Link>
          <Link
            className="text-gray-700 hover:text-gray-900"
            href="/collection"
          >
            Collection
          </Link>
          <Link className="text-gray-700 hover:text-gray-900" href="/posts">
            Posts
          </Link>
          <Link className="text-gray-700 hover:text-gray-900" href="/users">
            Users
          </Link>
          <Link className="text-gray-700 hover:text-gray-900" href="/contacts">
            Contacts
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-gray-700 hover:text-gray-900">
            <FaSearch size={18} />
          </button>
          <div className="relative">
            <button
              className="text-gray-700 hover:text-gray-900"
              onClick={toggleDropdown}
            >
              {user ? (
                <img
                  src={user.image}
                  alt="Profile"
                  className="w-8 h-8 rounded-full"
                />
              ) : (
                <FaUser size={18} />
              )}
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg py-2 z-10">
                {user ? (
                  <>
                    <Link
                      href="/profile"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Profile
                    </Link>
                    <Link
                      href="/preferences"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Preferences
                    </Link>
                    <Link
                      href="/help"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Help & Support
                    </Link>
                    <button
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <button
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={toggleLoginModal}
                  >
                    Log In
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      {isLoginModalOpen && (
        <LoginModal onClose={toggleLoginModal} setUser={saveUserData} />
      )}
    </nav>
  );
};

export default Navbar;
