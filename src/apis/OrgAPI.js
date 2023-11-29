import Swal from 'sweetalert2';
import axios from "axios";
import { GET_ORG_INFORMATION, POST_ORG_INFORMATION } from '../modules/OrgModule';
import { useNavigate } from 'react-router-dom';

export function VerifyPwdAPI({orgCode, orgPwd}, navigate){
    console.log('[OrgAPI] verifyPwdAPI 시작');
    const requestURL = `http://localhost:8001/orgInfo/${orgCode}`;
    return async (dispatch, getState) => {
        try {
            console.log("비밀번호? ", orgPwd);
            const result = await axios.get(requestURL, {params : {orgPwd}});
            console.log('[OrgAPI] verifyPwdAPI RESULT : ', result.data);
            dispatch({type: GET_ORG_INFORMATION, payload: result.data});
            localStorage.setItem("orgData", JSON.stringify(result.data[0]));
            navigate('/myPageOrg/modify');
        } catch (error){
            console.error('[OrgAPI] verifyPwdAPI 에러 발생 : ', error);
            if(error.response?.status == 400){
                Swal.fire({
                    icon: "error",
                    iconColor: "#DB524E",
                    title: "비밀번호를 다시 확인해 주세요.",
                    showCancelButton: false,
                    confirmButtonColor: '#1D7151',
                    confirmButtonText: '확인'
                })
            }else{
                Swal.fire({
                    icon: "error",
                    iconColor: "#DB524E",
                    title: "처리 중 오류가 발생했습니다 (" + error.response?.status + ")",
                    text: "문제가 지속될 경우 고객센터로 문의 바랍니다.",
                    showCancelButton: false,
                    confirmButtonColor: '#1D7151',
                    confirmButtonText: '확인'
                })
            }
        }
    }
}

export function modifyOrgAPI({formdata, orgCode}, navigate){
    console.log('[OrgAPI] modifyOrgAPI 시작 : ', formdata);
    const requestURL = `http://localhost:8001/orgModify/${orgCode}`;
    return async (dispatch, getState) => {
        const result = await axios.post(requestURL, formdata, {
            headers: {
                "Content-Type": `multipart/form-data`,
                "Accept": "*/*"
        }})
        .then(function(result){
            console.log('[OrgAPI] modifyOrgAPI RESULT : ', result);
            if(result.status === 200){
                console.log('[OrgAPI] modifyOrgAPI SUCCESS');
                dispatch({type: POST_ORG_INFORMATION, payload: result.data});
                Swal.fire({
                    icon: "success",
                    iconColor: '#1D7151',
                    title: "정상적으로 처리되었습니다.",
                    showCancelButton: false,
                    confirmButtonColor: '#1D7151',
                    confirmButtonText: '확인'
                }).then(result => {
                    if(result.isConfirmed){
                        navigate('/myPageOrg');
                }})
            }
        })
        .catch((error) => {
            console.log("[OrgAPI] modifyOrgAPI FAIL : ", error);
            Swal.fire({
                icon: "error",
                iconColor: "#DB524E",
                title: "처리 중 오류가 발생했습니다 (" + error.response?.status + ")",
                showCancelButton: false,
                confirmButtonColor: '#1D7151',
                confirmButtonText: '확인'
            })
        });
    }
}