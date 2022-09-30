import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getReviews } from "../utils/api";
import createReviewCard from "../utils/create-review-card";

const ReviewsByCategory = (props) => {
  const [currReviews, setCurrReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { category } = useParams();
  const { currCategories } = props;

  const categoryObj = currCategories.filter((elem) => {
    return elem.slug === category;
  })[0];

  useEffect(() => {
    setIsLoading(true);

    getReviews().then((data) => {
      const selectedReviews = data.reviews.filter((review) => {
        return review.category === category;
      });
      setCurrReviews(selectedReviews);

      setIsLoading(false);
    });
  }, [category]);

  if (isLoading) return <p>Loading...</p>;
  return (
    <div>
      <h2>{category}</h2>
      <h4>{categoryObj.description}</h4>

      {currReviews.map((review) => {
        return createReviewCard(review);
      })}
    </div>
  );
};
export default ReviewsByCategory;
