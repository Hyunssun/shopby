import { atom } from "recoil";

import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();

export const categoriesList = atom({
  key: "categoriesList",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
