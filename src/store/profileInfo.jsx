import { atom } from "recoil";

import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();

export const profileInfo = atom({
  key: "profileInfo",
  default: "",
  effects_UNSTABLE: [persistAtom],
});
