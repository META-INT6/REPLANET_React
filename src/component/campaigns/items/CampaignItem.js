import { NavLink } from "react-router-dom";
import HeartButton from "../../mypage/items/HeartButton";
import moment from 'moment';

function CampaignItem({ campaign }) {
  let currentBudget = campaign.currentBudget;
  let goalBudget = campaign.goalBudget;
  let percentage = Math.ceil((currentBudget / goalBudget) * 100).toFixed(0);
  let campaignCode = campaign.campaignCode;

  let endDate = moment(campaign.endDate).subtract(1, 'months').format('YYYY-MM-DD');
  let endDate2 = new Date(endDate)
  let today = new Date();
  today.setDate(today.getDate() - 1);

  // 파일 정보
  let fileSaveName = campaign? campaign.campaignDescfileList[0] : ''
  if (fileSaveName == null || undefined) {
    fileSaveName = false;
  } else {
    fileSaveName = true;
  }


  return (
    <div className="item">
      <NavLink className="item-thumb rounded-3 mb-1" to={`/campaign/${campaign.campaignCode}`}>
        <img src={fileSaveName ? `campaigns/${campaign.campaignDescfileList[0].fileSaveName}` : 'campaigns/default/noImage.png'} alt="캠페인 이미지" />
      </NavLink>
      <h4> {campaign.campaignTitle}</h4>
      <h6>{campaign.orgName}</h6>
      {today >= endDate2 ?
        "" :
        <HeartButton campaignCode={campaignCode} />
      }


      <progress className="progress" value={percentage} max="100"></progress>
      <div className="campaign-progress-info">
        <span className="amount">{campaign.currentBudget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</span>
        <span className="percent float-right">{percentage > 100 ? '목표금액 초과! 감사합니다' : percentage + '%'}</span>
      </div>
    </div>
  );
}

export default CampaignItem;
