import React from 'react';
import styled, {CSSProperties} from "styled-components";
import {LinkMarryFont} from "@designsystem/foundation/text/textType";
import Comment from "@remote/value/Comment";
import {Column, Row} from "@designsystem/component/flexLayout";
import Text from "@designsystem/component/text";
import colors from "@designsystem/foundation/colors";
import Spacer from "@designsystem/component/spacer";
import Icon, {IconType} from "@designsystem/foundation/icon";
import Design from "@remote/enumeration/Design";
import {trimArray} from "@util/array.util";
import {trimString} from "@util/string.util";

interface GuestCommentsTemplateProps {
    comments: Comment[];
    design: Design;
    templateFont: LinkMarryFont;
    background: CSSProperties['background'];
    addFontSize: number;
    onRemove: (comment: Comment) => void;
}

function GuestCommentsTemplate(
    {
        comments,
        design,
        templateFont,
        background,
        addFontSize,
        onRemove,
    }: GuestCommentsTemplateProps
) {
    switch (design) {
        case Design.BASIC:
            return (
                <Column gap={12} $alignItems={'stretch'}>
                    {trimArray(comments, 3).map((comment, index) => (
                        <S.basicContainer key={index} background={background}>
                            <Row gap={8} $alignItems={'center'}>
                                <Text
                                    text={`From. ${comment.name}`} font={templateFont} size={18 + addFontSize}
                                    color={colors.g600}
                                    weight={300}
                                />
                                <Text
                                    text={comment.createdDate} font={templateFont} size={12 + addFontSize}
                                    color={colors.g300}
                                    weight={300}
                                />
                                <Spacer/>
                                <Icon
                                    type={IconType.CrossLine} size={20} tint={colors.g300} style={{cursor: 'pointer'}}
                                    onClick={() => {
                                        onRemove(comment);
                                    }}
                                />
                            </Row>
                            <Text
                                text={comment.content} font={templateFont} size={16 + addFontSize} color={colors.g600}
                                weight={300}
                            />
                        </S.basicContainer>
                    ))}
                </Column>
            );
        case Design.STICKER:
            return (
                <Row gap={20} $alignItems={'stretch'}>
                    {trimArray(comments, 2).map((comment, index) => (
                        <S.stickerContainer key={index} background={background}>
                            <Icon
                                type={IconType.CrossLine} tint={colors.g300} size={20 + addFontSize}
                                style={{alignSelf: 'flex-end', cursor: 'pointer'}}
                                onClick={() => {
                                    onRemove(comment);
                                }}
                            />
                            <Column flex={1}>
                                <Text
                                    text={comment.content} font={templateFont} size={16 + addFontSize} weight={300}
                                    color={colors.g600}
                                />
                                <Spacer/>
                                <Column gap={4}>
                                    <Text
                                        text={`from. ${comment.name}`} font={templateFont} size={16 + addFontSize}
                                        weight={300}
                                        color={colors.g600}
                                    />
                                    <Text
                                        text={trimString(comment.createdDate, 10)} font={templateFont}
                                        size={12 + addFontSize}
                                        weight={300}
                                        color={colors.g300}
                                    />
                                </Column>
                            </Column>
                        </S.stickerContainer>
                    ))}
                </Row>
            );
    }
}


const S = {
    basicContainer: styled.div<{ background: CSSProperties['background'] }>`
        display: flex;
        flex-direction: column;
        padding: 24px;
        gap: 16px;
        background: ${({background}) => background};
        border-radius: 12px;
    `,
    stickerContainer: styled.div<{ background: CSSProperties['background'] }>`
        display: flex;
        flex-direction: column;
        gap: 8px;
        height: 228px;
        flex: 1;
        padding: 12px;
        background: ${({background}) => background};
    `
}

export default GuestCommentsTemplate;