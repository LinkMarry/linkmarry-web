import {ResponseData, ResponseVoid} from "../value/Response";
import customApi from "./foundation/customApi";
import InfoMember from "../value/InfoMember";
import EditMemberRequest from "../value/request/EditMemberRequest";

class MemberApi {
    static PATH = 'member';
    
    /**
     * 토큰 refresh
     */
    async refresh(token: string): Promise<ResponseData<string>> {
        const {data} = await customApi.get(`${MemberApi.PATH}/refresh?token=${token}`);
        return data;
    }

    /**
     * 자신의 프로필 불러오기
     */
    async getMyProfile(): Promise<InfoMember> {
        const {data} = await customApi.get(`${MemberApi.PATH}/info`);
        return data;
    }

    /**
     * 프로필 수정
     */
    async editMyProfile(req: EditMemberRequest): Promise<ResponseVoid> {
        const {data} = await customApi.patch(`${MemberApi.PATH}/edit`, req);
        return data;
    }
}

const memberApi = new MemberApi();

export default memberApi;