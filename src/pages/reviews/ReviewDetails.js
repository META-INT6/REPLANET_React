import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { callGetSpecificReviewAPI } from "../../apis/ReviewAPI";
import { ReviewDetailsIntroductionBox } from "../../component/reviews/items/ReviewDetailsIntroductionBox";
import { ReviewContent } from "../../component/reviews/items/ReviewContent";
import { ReviewComment } from "../../component/reviews/items/ReviewComment";
import { callgetMemberCode } from "../../apis/ReviewAPI";


export function ReviewDetails() {

  const { reviewCode } = useParams();
  const dispatch = useDispatch();
  const review = useSelector((state) => state.reviewReducer.review);
  const memberCode = useSelector((state) => state.reviewReducer.memberCode);

  
  useEffect(() => {
    dispatch(callGetSpecificReviewAPI(reviewCode));
  }, [reviewCode]);


  console.log("memberCode : ", memberCode)

  console.log('(ReviewDetailsPage) : ', review);

  useEffect(() => {
        dispatch(callgetMemberCode());
  },[memberCode]);

  

     return (
      review && (
        <div className="container-first">

          <h1 className="py-3 container-centered">{review.reviewTitle}</h1>
            <ReviewDetailsIntroductionBox review={review} />
          <div>
            <ReviewContent review={review}/>
          </div>
          <div id="comment">
            <ReviewComment review={review} memberCode={memberCode}/>
          </div>
        </div>
      )
    );
}