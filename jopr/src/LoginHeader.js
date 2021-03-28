import React, {useState} from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import Modal from './Modal';
//https://velog.io/@denmark-choco/GoogleLogin-%ED%9B%84-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EC%9C%A0%EC%A7%80%ED%95%98%EA%B8%B0
//이 링크를 참고하여 로그인 유지 기능 구현 예정
function LoginHeader() {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    }
    const closeModal = () => {
        setModalOpen(false);
    }
    return (
        <div className="login">
            <Modal open={modalOpen} close={closeModal} header="Login"/>
            <Link to="/join"><span> 회원 가입</span></Link>
            <span onClick={openModal}>로그인</span>
        </div>
    );
}

export default LoginHeader;