import { useState, useEffect } from "react"
import { getReviews } from "../utils/api";



const Reviews = () => {

    const [currReviews, setCurrReviews] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getReviews()
          .then((data) => {
            setCurrReviews(data.reviews);
                
             setIsLoading(false);
          });
      }, []);





if (isLoading) return <p>Loading...</p>;
    return (
        <div>
            <h2>All Reviews</h2>
            {currReviews.map((review) => {
                    return (
                        <section  key={review.review_id} className='item'>
                                    <h4 className='review-card-title'>{review.title}</h4>
                                    <p className='review-card-author'>{review.owner}</p>
                                    <p className='review-card-blurb'>{review.review_body.slice(0,200)}...</p>
                                    <p className='review-card-category'>{review.category}</p>
                                    <img src={review.review_img_url} className='review-card-img'></img>
                                    <p className='review-card-votes'> Votes: {review.votes}</p>
                                    <p className='review-card-comments'>Commment Count: {review.comment_count}</p>
                                    <p className='review-card-date'>Added {review.created_at}</p>
                                </section>
                    )
            })}
        </div>

    )
}
export default Reviews

//                   review_id: Number, 
//                   title: String, 
//                   owner: String, 
//                   designer: String, 
//                   review_body: String,
//                   review_img_url: String,
//                   category: String, 
//                   created_at: String,
//                   votes: Number, 
//                   comment_count: String