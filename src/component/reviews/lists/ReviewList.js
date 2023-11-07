import { ReviewListSearchbar } from "../items/ReviewListSearchbar";
import { Review } from "../items/Review";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callGetReviewsAPI } from "../../../apis/ReviewAPI";



export function ReviewList () {

    const result = useSelector(state => state.reviewReducer);

    console.log('(reviewList) result : ', result);
    const dispatch = useDispatch();

    const review = result.reviewList;
    console.log('(ReviewList) review result: ', review);

    useEffect (
        () => {
            dispatch(callGetReviewsAPI())
        },
        []
    );


    return (
        review && (
                <div>
                    { review.map(review => <Review key={review.campaignRevCode} review={review}/>) }
                </div>
        )
    );
}