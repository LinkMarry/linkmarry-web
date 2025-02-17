import React, {useEffect, useState} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import config from "@config/config";
import KakaoRedirectPage from "@page/KakaoRedirectPage";
import MyPage from "@page/mypage/MyPage";
import ComponentDemo from "@designsystem/demo/component.demo";
import FoundationDemo from "@designsystem/demo/foundation.demo";
import TemplateComponent from "@src/component/template/TemplateComponent";
import {dummyWedding} from "@remote/value/Wedding";
import TemplatesPage from "@page/templates/TemplatesPage";
import WeddingPage from "@page/WeddingPage";
import {Helmet} from "react-helmet";
import LoginPage from "@page/LoginPage";
import AutoFocusContext from "@src/context/AutoFocusContext";
import {css} from "styled-components";
import {Row} from "@designsystem/component/FlexLayout";

const {Kakao} = window as any;

function App() {
    useEffect(() => {
        // 카카오 객체를 초기화 (필수)
        if (!Kakao?.isInitialized()) {
            Kakao?.init(config.kakao.javascriptKey);
        }
    }, []);

    const [autoFocus, setAutoFocus] = useState(true);

    return (
        <AutoFocusContext.Provider value={{
            autoFocus,
            setAutoFocus: value => setAutoFocus(value),
        }}>
            <Helmet>
                <meta property="og:title" content="링크메리"/>
                <meta property="og:description"
                      content="링크메리와 함께 결혼을 더욱 특별하게. 이제, 종이 청첩장 대신 스마트폰으로 간편하고 빠르게 초대장을 보내보세요"/>
                <meta property="og:image" content="/logo512"/>
                <meta property="og:url" content="https://www.linkmarry.com/"/>
                <meta property="og:type" content="website"/>
                <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png"/>
            </Helmet>
            <Routes>
                {/*service*/}
                <Route path={'login'} element={<LoginPage/>}/>
                <Route path={'my-page'} element={<MyPage/>}/>
                <Route path={'templates'} element={<TemplatesPage/>}/>

                {/*auth*/}
                <Route path={'login/oauth2/code/kakao'} element={<KakaoRedirectPage/>}/>

                {/*not found*/}
                <Route path={'*'} element={<Navigate to={'/'}/>}/>

                {/*wedding*/}
                <Route path={'wedding/:url'} element={<WeddingPage/>}/>
                <Route path={'sample'} element={(
                    <Row $justifyContent={'center'} $customStyle={css`
                        background: ${dummyWedding.template.templateColor};
                        padding: 64px 0;
                    `}>
                        <TemplateComponent wedding={dummyWedding} isPreview={true}/>
                    </Row>
                )}/>
                
                {/*design-system*/}
                {config.env === 'development' && (
                    <>
                        <Route path={'design-system/foundation'} element={<FoundationDemo/>}/>
                        <Route path={'design-system/component'} element={<ComponentDemo/>}/>
                    </>
                )}
            </Routes>
        </AutoFocusContext.Provider>
    );
}

export default App;
