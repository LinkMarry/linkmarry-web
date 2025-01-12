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
    background: CSSProperties['background'];
    onRemove: (comment: Comment) => void;
}

function GuestCommentsTemplate(
    {
        comments,
        design,
        background,
        onRemove,
    }: GuestCommentsTemplateProps
) {
    switch (design) {
        case Design.BASIC:
            return (
                <Column gap={12} $alignItems={'stretch'}>
                    {trimArray(comments, 3).map((comment, index) => (
                        <BasicGuestComment
                            key={index}
                            comment={comment}
                            background={background}
                            onRemove={() => onRemove(comment)}
                        />
                    ))}
                </Column>
            );
        case Design.STICKER:
            return (
                <Row gap={20} $alignItems={'stretch'}>
                    {trimArray(comments, 2).map((comment, index) => (
                        <StickerGuestComment
                            key={index}
                            comment={comment}
                            background={background}
                            onRemove={() => onRemove(comment)}
                        />
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

interface GuestCommentProps {
    comment: Comment;
    background: CSSProperties['background'];
    onRemove: () => void;
}

export function BasicGuestComment(
    {
        comment,
        background,
        onRemove
    }: GuestCommentProps
) {
    return (
        <S.basicContainer background={background}>
            <Row gap={8} $alignItems={'center'}>
                <Text size={18} color={colors.g600} weight={300}>
                    From. {comment.name}
                </Text>
                <Text size={12} color={colors.g300} weight={300}>
                    {comment.createdDate}
                </Text>
                <Spacer/>
                <Icon
                    type={IconType.CrossLine} size={20} tint={colors.g300} style={{cursor: 'pointer'}}
                    onClick={onRemove}
                />
            </Row>
            <Text size={16} color={colors.g600} weight={300}>
                {comment.content}
            </Text>
        </S.basicContainer>
    );
}

export function StickerGuestComment(
    {
        comment,
        background,
        onRemove
    }: GuestCommentProps
) {
    return (
        <S.stickerContainer background={background}>
            <Icon
                type={IconType.CrossLine} tint={colors.g300} size={20}
                style={{alignSelf: 'flex-end', cursor: 'pointer'}}
                onClick={onRemove}
            />
            <Column flex={1}>
                <Text size={16} weight={300} color={colors.g600}>
                    {comment.content}
                </Text>
                <Spacer/>
                <Column gap={4}>
                    <Text size={16} weight={300} color={colors.g600}>
                        from. {comment.name}
                    </Text>
                    <Text
                        size={12}
                        weight={300}
                        color={colors.g300}
                    >{trimString(comment.createdDate, 10)}</Text>
                </Column>
            </Column>
        </S.stickerContainer>
    );
}

export default GuestCommentsTemplate;