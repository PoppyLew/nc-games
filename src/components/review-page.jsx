import { useEffect, useState } from "react"
import { getReviewById } from "../utils/api";
import { useParams } from "react-router-dom";

const ReviewPage = () => {
    const [currReview, setCurrReview] = useState()
    const [isLoading, setIsLoading] = useState(true);
    const { review_id } = useParams();

    useEffect(() => {
    setIsLoading(true);

    getReviewById(review_id).then((data) => {
      
      setCurrReview(data.review);

      setIsLoading(false);
    });
  }, []);

    if (isLoading) return <p>Loading...</p>;
    return (
        <div>
            <h3>{currReview.title}</h3>
                    <p className='review-page-author'>{currReview.owner}</p>
                    <p className='review-page-category'>{currReview.category}</p>
                    <img className='review-page-img' src={currReview.review_img_url} alt={currReview.title}></img>
                    <p className='review-page-blurb'>{currReview.review_body}...</p>
                    
                    <p className='review-page-votes'> Votes: {currReview.votes}</p>
                    <p className='review-page-comments'>Commment Count: {currReview.comment_count}</p>
                    <p className='review-page-date'>Added {currReview.created_at}</p>
        </div>
    )

}
export default ReviewPage

// {
//     review: {
//       review_id: Number, 
//       title: String, 
//       owner: String, 
//       designer: String, 
//       review_body: String,
//       review_img_url: String,
//       category: String, 
//       created_at: String,
//       votes: Number, 
//       comment_count: String
//     }
//   }