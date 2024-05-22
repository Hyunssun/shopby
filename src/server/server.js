import axios from "axios";

const auth = {
  version: import.meta.env.VITE_APP_VERSION,
  clientid: import.meta.env.VITE_APP_CLIENTID,
  platform: import.meta.env.VITE_APP_PLATFORM,
};

const instance = axios.create({
  timeout: 6000 * 5,
});

instance.defaults.baseURL = import.meta.env.VITE_APP_API_URL;
instance.defaults.headers = auth;

// 쇼핑몰 정보
export const getMallAPI = async () => {
  return instance.get("/malls");
};

// 주소 조회
export const getAddressAPI = async (pageNumber, pageSize, keyword) => {
  return instance.get(
    `/addresses/search?pageNumber=${pageNumber}&pageSize=${pageSize}&keyword=${keyword}`
  );
};

/*-----------------------member-------------------------*/
// 로그인
export const postLoginAPI = async (id, pw) => {
  return instance.post("/oauth/token", {
    memberId: id,
    password: pw,
  });
};

// 회원가입
export const postJoinAPI = async (postData) => {
  return instance.post("/profile", postData);
};

// 아이디 중복 확인
export const getIDExistAPI = async (id) => {
  return instance.get(`/profile/id/exist?memberId=${id}`);
};

// 이메일 중복 확인
export const getEmailExistAPI = async (email) => {
  return instance.get(`/profile/email/exist?email=${email}`);
};

// 휴대폰번호 중복 확인
export const getMobileExistAPI = async (mobile) => {
  return instance.get(`/profile/mobile/exist?mobileNo=${mobile}`);
};

// 회원정보 조회
export const getProfileAPI = async (accessToken) => {
  auth.accessToken = accessToken;

  return instance.get(`/profile`);
};

// 아이디 찾기
export const postFindIdAPI = async (postData) => {
  return instance.post("/profile/find-id", postData);
};
