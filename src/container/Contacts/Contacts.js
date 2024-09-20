import {
  FaTelegramPlane,
  FaLinkedin,
  FaEnvelope,
  FaGithub,
  FaPhone,
} from "react-icons/fa";

export default function Contacts() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg text-center">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Mavlonbek Turgunov
        </h1>
        <div className="flex flex-col gap-4">
          <a
            href="https://t.me/MavlonTurgunof"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-blue-500 hover:text-blue-700 transition-colors"
          >
            <FaTelegramPlane className="text-2xl" />
            <span className="text-lg">Telegram</span>
          </a>
          <a
            href="https://www.linkedin.com/in/mavlonbek-turgunov-1a75b7248"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
          >
            <FaLinkedin className="text-2xl" />
            <span className="text-lg">LinkedIn</span>
          </a>
          <a
            href="mailto:mavlondev2023@gmail.com"
            className="flex items-center justify-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
          >
            <FaEnvelope className="text-2xl" />
            <span className="text-lg">mavlondev2023@gmail.com</span>
          </a>
          <a
            href="https://github.com/MavlonTurgunof"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-gray-800 hover:text-gray-900 transition-colors"
          >
            <FaGithub className="text-2xl" />
            <span className="text-lg">GitHub</span>
          </a>
          <div className="flex items-center justify-center gap-2 text-gray-700">
            <FaPhone className="text-2xl" />
            <span className="text-lg">+998950420319</span>
          </div>
        </div>
      </div>
    </div>
  );
}
