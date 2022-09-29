import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getReviews } from "../utils/api";
import createReviewCard from "../utils/create-review-card";

const ReviewsByCategory = () => {
    const [currReviews, setCurrReviews] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const {category} = useParams()
    

    
    useEffect(() => {
        setIsLoading(true)
        
        getReviews()
          .then((data) => {
            const selectedReviews =data.reviews.filter((review) => {
                return review.category === category
            })
            setCurrReviews(selectedReviews);
            console.log(currReviews)
                
             setIsLoading(false);
          });
      }, [category]);

      if (isLoading) return <p>Loading...</p>;
return (
    <div >
        <h2>{category}</h2>
        

         {currReviews.map((review) => {
                   return createReviewCard(review)
            })}
    </div>
)
    
     
}
export default ReviewsByCategory
