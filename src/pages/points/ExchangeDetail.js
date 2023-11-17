import ExchangeFile from "../../component/points/items/ExchangeFile";
import ExchangeInfo from "../../component/points/items/ExchangeInfo";
import "../../assets/css/reset.css";
import "../../assets/css/common.css";
import "../../assets/css/adminexchange.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { exchangeDetailAPI } from "../../apis/PointAPI";


function ExchangeDetail(){
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const params = useParams();
    const info = useSelector(state => state.exchangeReducer);

    console.log('코드 확인 : ', params.exchangeCode);

    useEffect(
        () => {
            dispatch(exchangeDetailAPI({
                exchangeCode: params.exchangeCode,
            }));
        }, []
    );

    console.log('info 확인 : ', info);

    if(!info){
        return <div></div>
    }
    return (
        <div className="items-container ic2" style={{marginTop:"5rem"}}>
            <div className="infoDiv">
                <div style={{alignItems:"left"}}>
                    <a onClick={() => navigate(-1)} style={{color:"gray", cursor:"pointer"}}>← Back</a>
                    <h1>포인트 전환 신청 내용</h1>
                    <ExchangeInfo info={info} exchangeCode={params.exchangeCode} />
                </div>
            </div>
            <div className="fileDiv">
                <ExchangeFile info={info}/>
            </div>
        </div>
    );
}

export default ExchangeDetail;