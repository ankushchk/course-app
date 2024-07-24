import { selectorFamily } from "recoil";
import { coursesState } from "./atoms";
import { Course } from "../../types/types";

export const courseByIdState = selectorFamily<Course | undefined, string>({
  key: "courseByIdState",
  get:
    (id: string) =>
    ({ get }) => {
      const courses = get(coursesState);
      return courses.find((course) => course._id === id);
    },
});
