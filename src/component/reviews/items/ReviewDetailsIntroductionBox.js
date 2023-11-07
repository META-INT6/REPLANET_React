import { Link } from "react-router-dom"

export function ReviewDetailsIntroductionBox({review}) {

    return (
      
        <div class="items-container ic3 g-gap2 campaign-list-container">

<h1 class="py-3 container-centered">{review.reviewTitle}</h1>
            <Link to={`/reviews/reviewRegist/${review.campaignRevCode}`}>리뷰 등록하기</Link>
                
        <div class="item">
            
                <div class="item-thumb rounded-3 mb-1">
                    <img src="../../assets/images/campaign/1.jpg" />
                </div>
                
        </div>

        <div class="item" style={{display: "block"}}>
          <div class="text-right">
            <h2>모금액 총 {review.campaignCurrentBudget} 원으로</h2>
              <h3>따뜻한 손길을 내어줄 수 있었습니다 </h3>
        </div>
        
          <hr/>
        
        <div class="item p-2 border">
          <h5>{review.campaignOrgName}/</h5>
          <p>{review.campaignOrgDescription}</p>
        </div>
        
          <ul>
            <li> - 봉사활동에 참여하면 리플래닛이 기부합니다</li>
            <li> - 기부금은 100% 단체에 전달됩니다</li>
          </ul>
    </div>
</div>
    )
}