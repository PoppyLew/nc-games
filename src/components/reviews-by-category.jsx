import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getReviews } from "../utils/api";
import ReviewCard from "../utils/review-card";

const ReviewsByCategory = (props) => {
  const [currReviews, setCurrReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { category } = useParams();
  const { currCategories } = props;

  const categoryObj = currCategories.find(elem => 
    elem.slug === category
  );

  useEffect(() => {
    setIsLoading(true);

    getReviews(category).then((data) => {
      
      setCurrReviews(data.reviews);

      setIsLoading(false);
    });
  }, [category]);

  if (isLoading) return <p>Loading...</p>;
  return (
    <div>
      <h2 key={`${category}-header`}>{category}</h2>
      <h4 key={`${category}-description`}>{categoryObj.description}</h4>
      
      {currReviews.map((review) => {
        return <ReviewCard
        review={review}/>;
      })}
    </div>
  );
};
export default ReviewsByCategory;
