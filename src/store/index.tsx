import { atom, selector } from "recoil";

export const animeTitles = atom({
  key: "animeTitleList",
  default: [],
});

export const animeListPageNum = atom({
    key: "animeListPageNum",
    default: 0,
});

export const slicedAnimeTitles = selector({
    key: "slicedAnimeTitles", // defined a key property just like we did in the atoms we created above
    get: ({ get }) => { //this function has 2 parameters, but here using just one that is get with which we can access the value of an atom or selector. 
      const animes = get(animeTitles); //saved the animeTitles atom into variables animes
      const pageNum = get(animeListPageNum); //saved the animeListPageNum atom into variables pageNum
      const newAnimeList = [...animes];
      const arrIndex = pageNum === 0 ? 0 : pageNum * 50 + 1;
      return newAnimeList.splice(arrIndex, 50); // specified the index to start slicing from and then returned a new array of just 50 items.
    },
  }); // ge