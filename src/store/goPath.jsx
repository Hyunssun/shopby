import { atom } from "recoil";

import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();

export const goPath = atom({
  key: "goPath",
  default: "",
  effects_UNSTABLE: [persistAtom],
});
