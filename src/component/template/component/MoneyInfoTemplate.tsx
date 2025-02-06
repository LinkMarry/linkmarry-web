import React, {useRef, useState} from 'react';
import styled, {css} from "styled-components";
import MoneyInfo, {getMoneyInfoByBrideMarkFirst} from "@remote/value/MoneyInfo";
import Spacer from "@designsystem/component/Spacer";
import Icon, {IconType} from "@designsystem/foundation/icon";
import {Column, Row} from "@designsystem/component/FlexLayout";
import Text from "@designsystem/component/Text";
import BaseInfo, {getBaseInfoByBrideMarkFirst} from "@remote/value/BaseInfo";
import useScrollOnUpdate from "@hook/useScrollOnUpdate";

interface Props {
    baseInfo: BaseInfo;
    moneyInfo: MoneyInfo;
}

function MoneyInfoTemplate(
    {
        baseInfo,
        moneyInfo
    }: Props
) {
    const moneyInfoRef = useRef<HTMLDivElement>(null);
    useScrollOnUpdate(moneyInfoRef, [moneyInfo]);

    return (
        <S.root ref={moneyInfoRef}>
            <Column gap={40} $alignItems={'center'}>
                <Text size={20} weight={300} customStyle={css`
                    color: var(--g-600);
                `}>마음 전하실 곳</Text>
                <MoneyInfoComponent baseInfo={baseInfo} moneyInfo={moneyInfo}/>
            </Column>
        </S.root>
    );
}

interface MoneyInfoProps {
    baseInfo: BaseInfo;
    moneyInfo: MoneyInfo;
}

function MoneyInfoComponent(
    {
        baseInfo,
        moneyInfo
    }: MoneyInfoProps
) {
    const [clickedGroom, setClickedGroom] = useState(false);
    const [clickedBride, setClickedBride] = useState(false);

    const {first: firstBaseInfo, second: secondBaseInfo} = getBaseInfoByBrideMarkFirst(baseInfo);
    const {
        first: firstMoneyInfo,
        second: secondMoneyInfo
    } = getMoneyInfoByBrideMarkFirst(moneyInfo, baseInfo.brideMarkFirst);

    return (
        <S.container>
            <div>
                <div onClick={() => setClickedGroom(i => !i)}>
                    <Text type={'p4'} weight={'bold'} customStyle={css`
                        color: var(--g-600);
                    `}>{firstBaseInfo.korean}측</Text>
                    <Spacer/>
                    <Icon iconType={IconType.ExpandArrow} customStyle={css`
                        fill: var(--g-600);
                        ${clickedGroom ? css`
                            rotate: 90deg;
                        ` : css`
                            rotate: -90deg;
                        `}
                    `}/>
                </div>
                {clickedGroom && (
                    <>
                        <MoneyCell name={firstMoneyInfo.nameMoneyInfo} bankName={firstMoneyInfo.bankName}
                                   bankNumber={firstMoneyInfo.bankNumber} isGroom={true}/>
                        <MoneyCell name={firstMoneyInfo.fatherNameMoneyInfo} bankName={firstMoneyInfo.fatherBankName}
                                   bankNumber={firstMoneyInfo.fatherBankNumber} isGroom={true}/>
                        <MoneyCell name={firstMoneyInfo.motherNameMoneyInfo} bankName={firstMoneyInfo.motherBankName}
                                   bankNumber={firstMoneyInfo.motherBankNumber} isGroom={true}/>
                    </>
                )}
            </div>
            <div>
                <div onClick={() => setClickedBride(i => !i)}>
                    <Text type={'p4'} weight={'bold'} customStyle={css`
                        color: var(--p-800);
                    `}>{secondBaseInfo.korean}측</Text>
                    <Spacer/>
                    <Icon iconType={IconType.ExpandArrow} customStyle={css`
                        color: var(--p-800);
                        ${clickedBride ? css`
                            rotate: 90deg;
                        ` : css`
                            rotate: -90deg;
                        `}
                    `}/>
                </div>
                {clickedBride && (
                    <>

                        <MoneyCell name={secondMoneyInfo.nameMoneyInfo} bankName={secondMoneyInfo.bankName}
                                   bankNumber={secondMoneyInfo.bankNumber} isGroom={false}/>
                        <MoneyCell name={secondMoneyInfo.fatherNameMoneyInfo} bankName={secondMoneyInfo.fatherBankName}
                                   bankNumber={secondMoneyInfo.fatherBankNumber} isGroom={false}/>
                        <MoneyCell name={secondMoneyInfo.motherNameMoneyInfo} bankName={secondMoneyInfo.motherBankName}
                                   bankNumber={secondMoneyInfo.motherBankNumber} isGroom={false}/>
                    </>
                )}
            </div>
        </S.container>
    );
}

const S = {
    root: styled.div`
        display: flex;
        flex-direction: column;
        padding: 92px 60px;
        background: white;
        align-items: stretch;
    `,
    container: styled.div`
        display: flex;
        flex-direction: column;
        align-self: stretch;
        gap: 16px;

        > div {
            border-radius: 12px;

            > div:first-child {
                display: flex;
                align-items: center;
                padding: 10px 20px;
                cursor: pointer;
            }
        }

        > div:first-child {
            background: var(--g-100);

            > span {
                color: var(--g-600);
            }
        }

        > div:nth-child(2) {
            background: var(--p-100);

            > span {
                color: var(--p-800);
            }
        }
    `
}

function MoneyCell(props: {
    name: string,
    bankName: string,
    bankNumber: string,
    isGroom: boolean,
}) {
    const fullBankNumber = `${props.bankName} ${props.bankNumber}`;
    return (
        <Column
            gap={8}
            $alignItems={'stretch'}
            $customStyle={css`
                padding: 12px 20px;
                ${props.isGroom ? css`
                    border-top: 1px solid var(--g-200);
                ` : css`
                    border-top: 1px solid var(--p-400);
                `}
                border-top: 1px solid;
            `}
        >
            <Text type={'p5'}>{props.name}</Text>
            <Row $alignItems={'center'} $customStyle={css`
                padding: 8px 16px;
                background: white;
                border-radius: 4px;
            `}>
                <Text type={'btn1'}>{fullBankNumber}</Text>
                <Spacer/>
                <Icon iconType={IconType.Copy} size={20} customStyle={css`
                    color: var(--g-400);
                `} onClick={async () => {
                    try {
                        await navigator.clipboard.writeText(fullBankNumber);
                        alert("복사되었습니다. 원하는 곳에 붙여넣기하여 주세요.");
                    } catch (error) {
                        console.error(error);
                    }
                }}/>
            </Row>
        </Column>
    );
}

export default MoneyInfoTemplate;