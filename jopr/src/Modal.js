import React from 'react';
import "./Modal.css";
import GoogleLogin from 'react-google-login';


const clientid = '23536505507-d7d7buvkiqq5g1co0g8m6n7oi8bgevdb.apps.googleusercontent.com';

const successGoogle = (response) => {
    console.log(response);
}

const failGoolge = (response) => {

}

const Modal = (props) => {
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const {open, close, header} = props;

    return (
        // 모달이 열릴때 openModal 클래스가 생성된다.
        <div className={open ? 'openModal modal' : 'modal'}>
            {open ? (
                <section>
                    <header>
                        {header}
                        <button className="close" onClick={close}> &times; </button>
                    </header>
                    <main>
                        <span>
                            <GoogleLogin
                                className="google-login"
                                clientId={clientid}
                                buttonText="Google Login"
                                onSuccess={successGoogle}
                                onFailure={failGoolge}
                                cookiePolicy={'single_host_origin'}
                            />
                        </span>
                    </main>
                    <footer>
                        <button className="close" onClick={close}> close</button>
                    </footer>
                </section>
            ) : null}
        </div>
    )
}

export default Modal