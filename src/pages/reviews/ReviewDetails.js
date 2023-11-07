import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { callGetSpecificReviewAPI } from "../../apis/ReviewAPI";
import { ReviewDetailsIntroductionBox } from "../../component/reviews/items/ReviewDetailsIntroductionBox";
import { ReviewContent } from "../../component/reviews/items/ReviewContent";
import { Link } from "react-router-dom";

export function ReviewDetails() {
  const { campaignRevCode } = useParams();
  const dispatch = useDispatch();
  const result = useSelector(state => state.reviewReducer);
  const review = result.review;
  const isLoading = result.isLoading; // Add an isLoading property to your Redux state

  console.log('(ReviewDetailsPage) : ', review);

  useEffect(() => {
    dispatch(callGetSpecificReviewAPI(campaignRevCode));
  }, [campaignRevCode]); // Include campaignRevCode in the dependencies array

  if (isLoading) {
    // Render a loading indicator while the data is being fetched
    return <div>Loading...</div>;
  }

  if (!review) {
    // Handle the case where the data fetch is complete but review is still undefined
    return <div>No data available</div>;
  }
     return (
        <div className="container-first">

            <ReviewDetailsIntroductionBox review={review}/>
        <div>
            <ReviewContent review={review}/>
        </div>


        <div class="title-bar p-3" 
        data-responsive-toggle="example-menu" 
        data-hide-for="medium"> 
       <button class="menu-icon button button-primary w-20" 
               type="button" data-toggle>댓글
       </button> 
       
   </div> 
   <div id="example-menu" class=""> 
       <div class="dropdown-box" data-dropdown-menu>
        <div class="bg-light comments">

           <div class="comment">
              <div>
                <h5>닉네임</h5>
                <h6>dfsfsdsffdadsadda</h6>
                <h6>2023.11.15 | 수정 | 삭제</h6>
              </div>
           </div>

           <div class="comment">
              <div>
                <h5>닉네임</h5>
                <h6>dfsfsdsffdadsadda</h6>
                <h6>2023.11.15 | 수정 | 삭제</h6>
              </div>
           </div>

           <div class="comment">
              <div>
                <h5>닉네임</h5>
                <h6>dfsfsdsffdadsadda</h6>
                <h6>2023.11.15 | 수정 | 삭제</h6>
              </div>
            </div>

          <div class="comment-form" >
            <form>
              <h6>닉네임</h6>
                <div class="comment-input">
                  <textarea type="text" class="w-90" placeholder="응원의 한마디를 부탁드립니다❤️"></textarea>
                  <input class="button-primary rounded ml-1" type="button" value="댓글 등록"/>
                </div>
            </form>
          </div>
        </div>
        </div>
        </div></div>

        );
}