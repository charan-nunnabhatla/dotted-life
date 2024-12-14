import { atomWithStorage } from "jotai/utils";

export const tabsAtom = atomWithStorage("tabID", 0);
export const ageAtom = atomWithStorage("age", 1);

export const remainingAgeAtom = atomWithStorage("remaining-age", 1);

export const pastWeeksAtom = atomWithStorage("past-week", 1);
export const futureWeeksAtom = atomWithStorage("future-week", 1);

