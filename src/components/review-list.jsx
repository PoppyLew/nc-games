import { useState, useEffect } from "react";
import { getReviews } from "../utils/api";
import ReviewCard from "./review-card";

const Reviews = () => {
  const [currReviews, setCurrReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getReviews().then((data) => {
      setCurrReviews(data.reviews);

      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  return (
    <div>
      <h2>All Reviews</h2>

      {currReviews.map((review) => {
        return <ReviewCard review={review} />;
      })}
    </div>
  );
};
export default Reviews;
