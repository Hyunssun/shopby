import { atom } from "recoil";

import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();

export const menuOpen = atom({
  key: "menuOpen",
  default: "",
  effects_UNSTABLE: [persistAtom],
});
