import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { callGetSpecificReviewAPI } from "../../apis/ReviewAPI";
import { TextEditor } from "../../component/reviews/items/TextEditor.js";
import { callPostReview } from "../../apis/ReviewAPI";

export function ReviewRegist() {
    const { campaignRevCode } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const result = useSelector(state => state.reviewReducer);
    const review = result.review;

    const [reviewTitle, setReviewTitle] = useState('');
    const [reviewThumbnail, setReviewThumbnail] = useState('');
    const [convertedContent, setConvertedContent] = useState(null);

    // Callback function to receive HTML content from TextEditor
    const handleContentChange = (htmlContent) => {
        setConvertedContent(htmlContent);
    };

    useEffect(() => {
        dispatch(callGetSpecificReviewAPI(campaignRevCode));
    }, []);

    
    const submitReview = (event) => {
        event.preventDefault();
        console.log('hihihihihihi!');

        const campaignCampaignCode = review.campaignCampaignCode;
        dispatch(callPostReview(reviewTitle, convertedContent, campaignCampaignCode ));
        navigate('/reviews');
    }

    return (
        <>
            <div className="container-first">
                <form onSubmit={submitReview}>
                    <h1 className="py-3 container-centered">재단 후기 등록</h1>
                    <h5 className="container-centered">{review.campaignOrgName}</h5>
                    <div className="text-center">
                        <input type="text" value={reviewTitle} onChange={(e) => setReviewTitle(e.target.value)} className="searchbar" placeholder="제목을 입력해주세요" /><br />
                        <input type="file" value={reviewThumbnail} onChange={(e) => setReviewThumbnail(e.target.value)} placeholder="메인 이미지 1장을 업로드 해주세요" />
                    </div>

                    {/* Pass the callback function to TextEditor */}
                    <TextEditor onContentChange={handleContentChange} />
                    <input type="submit" />
                </form>
            </div>
        </>
    );
}
