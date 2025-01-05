import BaseInfo from "@remote/value/BaseInfo";
import WeddingSchedule from "@remote/value/WeddingSchedule";
import WeddingPlace from "@remote/value/WeddingPlace";
import Greeting from "@remote/value/Greeting";
import BaseMusic from "@remote/value/BaseMusic";
import LinkShare from "@remote/value/LinkShare";
import MoneyInfo from "@remote/value/MoneyInfo";
import Video from "@remote/value/Video";
import Phone from "@remote/value/Phone";
import Rsvp from "@remote/value/Rsvp";
import GuestComment from "@remote/value/GuestComment";
import Template from "@remote/value/Template";
import Comment from "@remote/value/Comment";

export default interface Wedding {
    position: number[] // 아래 내용 위치
    template: Template;
    baseInfo: BaseInfo; // 기본 정보
    weddingSchedule: WeddingSchedule; // 예식 일시
    weddingPlace: WeddingPlace; // 예식 장소
    greeting: Greeting; // 인사말
    guestComment: GuestComment; // 방명록 정보
    guestComments: Comment[]; // 방명록 리스트
    baseMusic: BaseMusic; // 배경음악
    linkShare: LinkShare; // 링크 공유
    moneyInfo: MoneyInfo; // 축의금
    video: Video; // 영상
    phone: Phone; // 전화번호
    rsvp: Rsvp; // 참석의사
    imgList: string[] // 갤러리
}