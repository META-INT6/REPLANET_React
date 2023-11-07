import { ReviewList } from "../../component/reviews/lists/ReviewList";
import { ReviewListSearchbar } from "../../component/reviews/items/ReviewListSearchbar";

export function Reviews() {

    return (
        <>
            <div className="container-first">

                <div className="item">
                    <h1 className="py-3 container-centered">캠페인 완료 후기</h1>
                    <ReviewListSearchbar />
                    <ReviewList/>
                </div>
                
            </div>
        </>
    );
}