const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 container mx-auto">
      <div className="container max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-semibold text-gray-800">Company</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                About
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-gray-800">Resources</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Get started
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Learn
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Case studies
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                FAQs
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-gray-800">Community</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Discord
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Events
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-gray-800">
            Subscribe to our newsletter
          </h3>
          <p className="mt-4 text-gray-600">
            Join our community to get weekly updates and unique gifts every
            Friday
          </p>
          <form className="mt-4">
            <input
              type="email"
              placeholder="Email address"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800"
            />
            <button
              type="submit"
              className="mt-4 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
