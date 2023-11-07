import { Link } from "react-router-dom";

export function Review ({review}) {


    return (
      <Link to={`/reviews/${review.campaignRevCode}`}>
        <div className="item">
 
        <h4>{review.reviewTitle}</h4>
        <h6>{review.campaignOrgName}</h6>
      </div>
      </Link>
    );
}