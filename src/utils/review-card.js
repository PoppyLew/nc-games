const ReviewCard = ({review}) => {

    return (
    
        <section  key={review.review_id} className='item'>
                    <h4 className='review-card-title'>{review.title}</h4>
                    <p className='review-card-author'>{review.owner}</p>
                    <p className='review-card-blurb'>{review.review_body.slice(0,200)}...</p>
                    <p className='review-card-category'>{review.category}</p>
                    <img src={review.review_img_url} alt={review.title} className='review-card-img' ></img>
                    <p className='review-card-votes'> Votes: {review.votes}</p>
                    <p className='review-card-comments'>Commment Count: {review.comment_count}</p>
                    <p className='review-card-date'>Added {review.created_at}</p>
                </section>
    )
}

export default ReviewCard