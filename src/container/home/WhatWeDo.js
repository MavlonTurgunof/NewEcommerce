const WhatWeDo = () => {
  return (
    <section className="bg-white py-24 container mx-auto">
      <div className="container mx-auto max-w-7xl text-center">
        {/* Title */}
        <h2 className="text-4xl font-bold text-gray-900">What We Do</h2>

        {/* Description */}
        <p className="mt-8 text-lg text-gray-700 max-w-3xl mx-auto">
          Our Focus: Crafting Inspiring Living Spaces. At{" "}
          <span className="font-semibold">Furniture home</span>, we’re dedicated
          to turning ordinary spaces into visual masterpieces. With a passion
          for design, we collaborate closely with you to bring your unique
          vision to life. From color palettes to furniture arrangement, our
          decor experts ensure each corner tells a captivating story.
        </p>

        {/* Additional Information */}
        <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
          Whether your style is contemporary, classic, or eclectic, let us
          expertly transform your dreams into stunning reality. Discover the art
          of creating lovely environments that truly resonate and inspire, as we
          skillfully turn houses into homes and rooms into reflections of you.
        </p>

        {/* Button */}
        <div className="mt-10">
          <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
