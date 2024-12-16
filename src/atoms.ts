import { atomWithStorage } from "jotai/utils";

export const animalsList: Array<string> = ["human", "dog", "cat", "bird"];
export const colors: Array<string> = [
  "rgb(143,191,160)",
  "rgb(194,183,155)",
  "rgb(161,181,201)",
  "rgb(183,159,209)",
];

export const averageAges: Record<string, number> = {
  human: 80,
  dog: 11.5,
  cat: 17.5,
  bird: 48,
};

export const tabsAtom = atomWithStorage("tabID", 0);
export const ageAtom = atomWithStorage("age", null);
export const currentAnimalAvgAge = atomWithStorage("currentAnimalAvgAge", 0);