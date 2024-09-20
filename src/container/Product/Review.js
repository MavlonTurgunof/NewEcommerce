import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import axios from "axios";
import PropTypes from "prop-types";
import { useRouter } from "next/router";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const { query } = useRouter();
  const productId = query.id;

  useEffect(() => {
    if (!productId) return;
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/${productId}`
        );
        setReviews(response.data.reviews);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product reviews:", error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) {
    return <p>Loading reviews...</p>;
  }

  return (
    <div className="bg-white container mx-auto p-4 text-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 pb-8 border-black border-b-4">
          Customer Reviews
        </h2>

        <div className="max-h-[700px] h-auto overflow-y-auto custom-scrollbar">
          {reviews.length === 0 ? (
            <p>No reviews available.</p>
          ) : (
            reviews.map((review, index) => (
              <div key={index} className="mb-4 border-b pb-4">
                <div className="flex items-center">
                  <ReactStars
                    value={review.rating}
                    edit={false}
                    size={30}
                    activeColor="#ffd700"
                  />
                  <span className="ml-2 text-sm text-gray-500">
                    {new Date(review.date).toDateString()}
                  </span>
                </div>
                <h3 className="text-lg font-semibold">{review.comment}</h3>
                <p className="text-sm text-gray-700">{review.reviewerName}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

Review.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      rating: PropTypes.number.isRequired,
      comment: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      reviewerName: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Review;
