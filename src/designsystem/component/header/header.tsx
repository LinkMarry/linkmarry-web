import React from 'react';
import styled from "styled-components";
import {Row} from "../flexLayout";
import Spacer from "../spacer";
import makeText, {TextType} from "../../foundation/text/textType";
import colors from "../../foundation/colors";

function Header() {
    return (
        <S.container>
            <Row
                flex={1}
                $alignItems={'center'}
                style={{
                    marginLeft: 128,
                    marginRight: 128,
                }}
                gap={66}
            >
                <span style={{width: 134}}>logo</span>
                <S.navItems>
                    <S.navItem>모바일 청첩장</S.navItem>
                    <S.navItem>스토어 이동</S.navItem>
                    <Spacer/>
                    <S.navItem>마이페이지</S.navItem>
                </S.navItems>
            </Row>
        </S.container>
    );
}

const S = {
    container: styled.div`
        display: flex;
        width: 100vw;
        height: 76px;
        align-items: center;
        border: 1px solid ${colors.g200};
    `,
    navItems: styled.ul`
        display: flex;
        gap: 44px;
        align-items: center;
        flex: 1;
    `,
    navItem: styled.li`
        display: flex;
        ${makeText(TextType.p5)};
        color: ${colors.black};
        cursor: pointer;
    `,
};

export default Header;