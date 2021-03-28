import React from 'react';
import {post} from 'axios';
import './Join.css'
import JOA from './2021_JOA.png';
import useInput from './useInput';

/*
db에서 내용을 불러온다.(신청 내용에 대하여 관리자일 경우 각 텍스트를 수정할 수 있고 삭제 가능)
신청 내용에 대한 것만 불러오고 텍스트를 표시 및 input란 생성
*/


function Join() {

    const [form, onChange, reset] = useInput({
        name: '',
        classNumber: '',
        grade: '',
        phoneNumber: '',
        major: '',
        DOB: '',
        interesting: '',
    })

    const handleFormSubmit = (e) => {
        e.preventDefault()
        addMember().then((response) => {
            console.log(response.data);
        });
        window.location = '/';
    }

    const addMember = () => {
        const url = '/';
        const formData = new FormData();
        formData.append('name', form.name);
        formData.append('classNumber', form.classNumber);
        formData.append('grade', form.grade);
        formData.append('phoneNumber', form.phoneNumber);
        formData.append('major', form.major);
        formData.append('DOB', form.DOB);
        formData.append('interesting', form.interesting);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        return post(url, formData, config)
    }

    return (
        <div className="join-container">
            <div className="join-box box-header">
                <h2>JOA 입부 신청서</h2>
                <p>
                    인하대 개발교육 봉사 동아리 ✨JOA를 찾아주신 신입생 및 재학생 여러분 환영합니다👏👏<br/>
                    해당 폼을 작성하신 후 제출하시면 확인 후, 순차적으로 단톡방에 초대해드립니다!<br/>
                    기타 문의사항은 다음의 오픈 카톡 또는 전화번호로 연락주시면 친절히 설명해드립니다.<br/>
                    🗨오픈 카카오톡: https://open.kakao.com/o/soi1r7Tc<br/>
                    ☎️회장 이주호: 010-7668-7785<br/>
                    ☎️부회장 이홍찬: 010-9239-7816<br/>
                </p>
            </div>

            <div className="join-box box-header">
                <img src={JOA}/>
            </div>

            <form onSubmit={handleFormSubmit}>
                <div className="join-box">
                    <div className="join-wrap">
                        <h5>1. 이름</h5>
                        <input
                            name="name"
                            onChange={onChange}
                            value={form.name}
                        />
                    </div>
                </div>

                <div className="join-box">
                    <div className="join-wrap">
                        <h5>2. 학번</h5>
                        <input
                            name="classNumber"
                            onChange={onChange}
                            value={form.classNumber}
                        />
                    </div>
                </div>
                <div className="join-box">
                    <div className="join-wrap">
                        <h5>3. 학년</h5>
                        <input
                            name="grade"
                            onChange={onChange}
                            value={form.grade}
                        />
                    </div>
                </div>
                <div className="join-box">
                    <div className="join-wrap">
                        <h5>4. 전화번호</h5>
                        <h6>단톡방 초대를 위해 정확한 기재 부탁드려요! <br/> 하이폰 '-'은 빼고 기재해 주세요!</h6>
                        <input
                            name="phoneNumber"
                            onChange={onChange}
                            value={form.phoneNumber}
                        />
                    </div>
                </div>
                <div className="join-box">
                    <div className="join-wrap">
                        <h5>5. 학과</h5>
                        <h6>정확한 학과 이름으로 적어주세요! <br/> ex) 컴퓨터 공학과</h6>
                        <input
                            name="major"
                            onChange={onChange}
                            value={form.major}
                        />
                    </div>
                </div>
                <div className="join-box">
                    <div className="join-wrap">
                        <h5>6. 생년월일</h5>
                        <input
                            name="DOB"
                            onChange={onChange}
                            value={form.DOB}
                        />
                    </div>
                </div>
                <div className="join-box">
                    <div className="join-wrap">
                        <h5>7. 관심있는 언어</h5>
                        <h6>참고용으로 조사중입니다. <br/> 관심이 있거나 하고 싶은 분야 자유롭게 말씀해 주세요. <br/> ex) Python, C++ etc..</h6>
                        <input
                            name="interesting"
                            onChange={onChange}
                            value={form.interesting}
                        />
                    </div>
                </div>

                <div className="btn">
                    <button className="button" type="submit">제출하기</button>
                </div>
            </form>
        </div>
    );
}

export default Join;